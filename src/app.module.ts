import { Global, Module } from '@nestjs/common';
import { service } from './constants/service.constant';
import { ConnectDbService } from './services/connect-db/connect-db.service';
import { CountNumberModule } from './modules/count_number/count_number.module';

@Global()
@Module({
  imports: [
    CountNumberModule
  ],
  providers: [
    {
      provide: service.connect_db,
      useClass: ConnectDbService,
    },
  ],
  exports: [service.connect_db]
})
export class AppModule {}
