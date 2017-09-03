export class Log {
  public readonly level: string;
  public readonly action: string;
  public readonly verb: string;
  public readonly dateTimestamp: number;

  constructor(verb: string, action: string, level: string) {
    this.level = level;
    this.verb = verb;
    this.action = action;
    this.dateTimestamp = new Date().getTime();
  }
}
