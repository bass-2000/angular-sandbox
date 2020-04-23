import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(name: string, status: string){
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  statusChange(id: number, newStatus: string ){
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
