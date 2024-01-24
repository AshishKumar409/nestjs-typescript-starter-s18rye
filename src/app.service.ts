import { Injectable } from '@nestjs/common';

export class AppService {
  getJoJo(): string {
    return "<h1>JoJo's Bizzare Adventure</h1>";
  }

  getBleach(): string {
    return '<h1>Bleach: Thousand Years Blood War</h1>';
  }
}
