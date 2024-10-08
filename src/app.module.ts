import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkModule } from './work/work.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Work } from './work/entities/work.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1314011915.',
      database: 'sistema_matricula',
      autoLoadModels: true,
      models: [User, Work],
      synchronize: true,
    }),
    WorkModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
