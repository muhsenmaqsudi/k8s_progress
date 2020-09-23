import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      username: 'muhsenmaqsudi',
      name: 'Muhsen Maqsudi',
      source: 'NestJS',
      email: 'muhsenmaqsudi',
    };
  }
}
