import { plainToClassFromExist } from 'class-transformer';
import { DeepPartial } from "./deep-partial";
import { ClassType } from "./class-type";
import { PlainObjectOf } from "./plain-object-of";


export class DtoFactory {
  public static create<T>(cls: ClassType<T>, data: DeepPartial<T>): T {
    const instance = new cls(data as never);

    return Object.assign(instance, data);
  }

  public static createWithRequired<T>(
    cls: ClassType<T>,
    data: PlainObjectOf<T>,
  ): T {
    const instance = new cls(data as never);

    return plainToClassFromExist(instance, data);
  }
}
