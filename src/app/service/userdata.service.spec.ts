/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {UserdataService} from './userdata.service';
import {Person} from "../models/person";
import {HttpModule} from "@angular/http";

describe('UserdataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserdataService]
    });
  });

  it('should return something', async(inject([UserdataService], (service: UserdataService) => { // async due to async methods
     service.getData().then(data =>{
      expect(data.length).toBeGreaterThanOrEqual(1);
    });
  })))
});
