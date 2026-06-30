import { Injectable } from '@angular/core';
import { ResultQuiz } from '@quiz/models/result.model';
import { ResultType } from '@quiz/enums/result-type.enum';
import { RESULTS } from '@quiz/data/results';

  @Injectable({
  providedIn: 'root'
})
export class ResultRepository {
  getAll(): ResultQuiz[] { return RESULTS; }
  getByType(type: ResultType): ResultQuiz | undefined { return RESULTS.find(result => result.type === type); }
}