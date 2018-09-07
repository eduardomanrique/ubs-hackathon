import coffeScript from 'coffeescript';

export default class RuleEngine {

  rules: any[];
    script: string = null;

    constructor(rules: any[]){
        this.rules = rules;
    }

    exec($entity){
        if(!this.script){
            this.buildScript($entity);
        }
        eval(this.script);
    }

    buildScript(e){
        let scripts = ['$entity.appliedRules = [];\n'];
        scripts = scripts.concat(this.rules.map((rule, index) => {
            let script = Object.keys(e).map(k => `${k}=$entity.${k}`);
            script.push(`if ${rule['content']}\n  $entity.appliedRules.push(${index})`);
            return coffeScript.compile(script.join('\n'));
        }));
        scripts = scripts.concat(this.rules.map((rule, index) => {
            let script = Object.keys(e).map(k => `${k}=$entity.${k}`);
            script.push(`if $entity.appliedRules.indexOf(${index}) >= 0\n${rule['action'].split('\n').map(line => `  ${line.trim()}`).join('\n')}`);
            script = script.concat(Object.keys(e).map(k => `$entity.${k}=${k}`));
            return coffeScript.compile(script.join('\n'));
        }));
        this.script = scripts.join('\n');
        console.log(this.script)
    }
}


