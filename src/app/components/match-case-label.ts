import { Pipe, PipeTransform } from '@angular/core';
import { MatchCaseHashMap } from '../lib/page-source-map';

@Pipe({
  name: 'matchCaseLabel'
})
export class MatchCaseLabel implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (!value) {
      return null;
    }
    return MatchCaseHashMap.find(v => v.caseId === value).label;
  }

}
