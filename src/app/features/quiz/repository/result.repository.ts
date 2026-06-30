import { Injectable } from '@angular/core';
import { Result } from '@quiz/models/result.model';
import { ResultType } from '@quiz/enums/result-type.enum';
import { RESULTS } from '@quiz/data/results';

@Injectable({
  providedIn: 'root'
})
export class ResultRepository {
  getAll(): Result[] { return RESULTS; }
  getByType(type: ResultType): Result | undefined { return RESULTS.find(result => result.type === type); }
}