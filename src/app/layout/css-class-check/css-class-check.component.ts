import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import pcLogoutSources from '../../json/pc-logout-souces.json';
import pcLoginSources from '../../json/pc-login-sources.json';
import spLogoutSources from '../../json/sp-logout-souces.json';
import spLoginSources from '../../json/sp-login-sources.json';
import {ResultMap, JsonTYpe, JsonTypeHashMap, MatchCase} from '../../lib/page-source-map';

@Component({
  selector: 'app-css-class-check',
  templateUrl: './css-class-check.component.html',
  styleUrls: ['./css-class-check.component.scss']
})
export class CssClassCheckComponent implements OnInit {

  fg: FormGroup;
  resultList: ResultMap[] = [];
  htmlJsonList: object[] = [];

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClient
  ) {
    this.fg = this.formBuilder.group({
      inputStyleStr: ['', Validators.compose([Validators.required])],
      deviceType: ['', Validators.compose([Validators.required])],
      isLogin: '',
      isLogout: ''
    });
  }

  ngOnInit(): void {
    this.htmlJsonList = this.createPageHtmlJsonList();
  }

  execSearch(): void {
    const inputSelector: string = this.fg.get('inputStyleStr').value;
    this.htmlJsonList.forEach((htmlJson, idx) => {
      this.execCheckInputSelector(htmlJson, idx, inputSelector);
    });
  }

  private execCheckInputSelector(htmlJson: object, jsonType: JsonTYpe, inputSelector: string): void {
    for (const [key, value] of Object.entries(htmlJson)) {
      console.log('###', key, value);
      const jsonTypeLabel: string = JsonTypeHashMap.find(jt => jt.jsonType === jsonType).label;
      this.resultList.push({
        pageId: value.pageId,
        pageName: value.pageName,
        url: value.url,
        typeLabel: jsonTypeLabel,
        type: jsonType,
        matchCase: MatchCase.class
      });
    }
  }

  private createPageHtmlJsonList(): object[] {
    const htmlJsonList = [];
    htmlJsonList.push(pcLogoutSources.pcLogoutSources);
    htmlJsonList.push(pcLoginSources.pcLoginSources);
    htmlJsonList.push(spLogoutSources.spLogoutSources);
    htmlJsonList.push(spLoginSources.spLoginSources);
    return htmlJsonList;
  }

  private getTargetAttributeList(html: string, attr: string): string[] {
    const regExp = new RegExp(`${attr}='([^']*)'`, 'g');
    console.log(regExp);
    return html.match(regExp);
  }

}
