import coffeScript from 'coffeescript';

export default class RuleEngine {

  rules: any[];
    script: string;

    constructor(rules: any[]){
        this.rules = rules;
        let scripts = ['$entity.appliedRules = [];\n'];
        scripts = scripts.concat(this.rules.map((rule, index) => {
            const script = `if ${rule['condition']}\n  $entity.appliedRules.push(${index})\n`;
            return coffeScript.compile(script);
        }));
        scripts = scripts.concat(this.rules.map((rule, index) => {
            const script = `if $entity.appliedRules.indexOf(${index}) >= 0\n${rule['action'].split('\n').map(line => `  ${line.trim()}`).join('\n')}\n`;
            return coffeScript.compile(script);
        }));
        this.script = scripts.join('\n');
        console.log(this.script)
    }

    exec($entity){
        eval(this.script);
    }
}


