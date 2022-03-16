import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Me = createParamDecorator(
  async (data: any, ctx: ExecutionContext): Promise<any> => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
