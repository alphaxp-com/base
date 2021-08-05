import { STATUS_CODES } from "http";

type ExceptionProps = {
  code: number;
  errors?: any[] | any;
  expose?: boolean;
  message?: string;
  status?: "ok" | "error";
  stack?: any;
};

export class Exception extends Error {
  code: number;
  errors?: any[] | any;
  message: string;
  status?: "ok" | "error";

  constructor(args: ExceptionProps) {
    const message =
      (args.expose && args.message) || (STATUS_CODES[args.code] as string);
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.code = args.code;
    this.message = message;
    this.name = this.constructor.name;
    this.status = args.code < 300 ? "ok" : "error";
  }
}
