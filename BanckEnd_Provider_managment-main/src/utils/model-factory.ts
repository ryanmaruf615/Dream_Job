import { ClassType } from './class-type';
import { DeepPartial } from './deep-partial';

export class ModelFactory {
  public static create<T>(cls: ClassType<T>, data: DeepPartial<T>): T {
    const instance = new cls(data as never);

    return Object.assign(instance, data);
  }
}
