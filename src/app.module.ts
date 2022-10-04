import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [UserModule, SharedModule, EmailModule],
})
export class AppModule {}
