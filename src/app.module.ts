import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';
import { Transaction } from './transactions/entities/transaction.entity';
@Module({
  imports: [ConfigModule.forRoot(),
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    models: [Transaction],
  }),

    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/  /entities/  /*.js'],
      migrationsRun: true,
      migrations: ['src/database/*.{js,ts}'],
      cli: {
        migrationsDir: 'src/database/migration',
      },
      synchronize: true,
      autoLoadEntities: true,
    }),*/
    TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
