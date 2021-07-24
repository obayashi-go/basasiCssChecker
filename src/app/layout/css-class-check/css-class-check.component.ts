import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import pcLogoutSources from '../../json/pc-logout-souces.json';
import pcLoginSources from '../../json/pc-login-sources.json';
import spLogoutSources from '../../json/sp-logout-souces.json';
import spLoginSources from '../../json/sp-login-sources.json';
import {
    ResultMap,
    JsonType,
    JsonTypeHashMap,
    MatchCase,
    MatchCaseHashMap,
    ConfirmPage
} from '../../lib/page-source-map';

@Component({
    selector: 'app-css-class-check',
    templateUrl: './css-class-check.component.html',
    styleUrls: ['./css-class-check.component.scss']
})
export class CssClassCheckComponent implements OnInit {

    fg: FormGroup;
    resultList: ResultMap[] = [];
    showLoading: boolean;
    confirmPageList: ConfirmPage[] = [];

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.fg = this.formBuilder.group({
            inputStyleStr: ['', Validators.compose([Validators.required])],
            isSp: true,
            isPc: true,
            isLogin: true,
            isLogout: true
        });
    }

    ngOnInit(): void {
        this.createConfirmPageList(pcLoginSources.pcLoginSources);
    }

    execSearch(): void {
        if (this.fg.invalid) {
          return;
        }
        this.resultList = [];
        this.showLoading = true;
        const inputSelector: string = this.fg.get('inputStyleStr').value;
        const isSp: boolean = this.fg.get('isSp').value;
        const isPc: boolean = this.fg.get('isPc').value;
        const isLogout: boolean = this.fg.get('isLogout').value;
        const isLogin: boolean = this.fg.get('isLogin').value;
        if (isSp && isLogout) {
            this.execCheckInputSelector(spLogoutSources.spLogoutSources, JsonType.spLogout, inputSelector);
        }
        if (isSp && isLogin) {
            this.execCheckInputSelector(spLoginSources.spLoginSources, JsonType.spLogin, inputSelector);
        }
        if (isPc && isLogout) {
            this.execCheckInputSelector(pcLogoutSources.pcLogoutSources, JsonType.pcLogout, inputSelector);
        }
        if (isPc && isLogin) {
            this.execCheckInputSelector(pcLoginSources.pcLoginSources, JsonType.pcLogin, inputSelector);
        }
        this.showLoading = false;
    }

    private createConfirmPageList(jsonList: object[]): void {
        jsonList.forEach(json => {
            this.confirmPageList.push({
                pageId: json['pageId'],
                pageName: json['pageName'],
                url: json['url']
            });
        });
    }

    private execCheckInputSelector(htmlJson: object, jsonType: JsonType, inputSelector: string): void {
        const jsonTypeLabel: string = JsonTypeHashMap.find(jt => jt.jsonType === jsonType).label;
        for (const [key, value] of Object.entries(htmlJson)) {
            const html = htmlJson[key]['source'];
            const checkAttrList = this.getTargetAttributeList(html, MatchCaseHashMap.find(m => m.caseId === MatchCase.class).label);
            let retMatchCount = 0;
            if (checkAttrList) {
                retMatchCount = this.execSelectorMatchCheck(inputSelector, checkAttrList);
            }
            if (retMatchCount > 0) {
                this.resultList.push({
                    pageId: value.pageId,
                    pageName: value.pageName,
                    url: value.url,
                    typeLabel: jsonTypeLabel,
                    type: jsonType,
                    matchCase: MatchCase.class,
                    matchCount: retMatchCount
                });
            }
        }
    }

    private execSelectorMatchCheck(inputSelector, checkAttrList: string[]): number {
      let hitCount = 0;
      checkAttrList.forEach(v => {
          v = v.replace('class=', '');
          if ( v === "'" + inputSelector + "'" ||
              v.startsWith("'" + inputSelector + ' ') ||
              v.endsWith(' ' + inputSelector + "'") ||
              ~v.indexOf(' ' + inputSelector + ' ') ) {
              hitCount++;
          }
        });

      return hitCount;
    }

    private getTargetAttributeList(html: string, attr: string): string[] {
        const regExp = new RegExp(`${attr}='([^']*)'`, 'g');
        return html.match(regExp);
    }

    goToTargetPage(url: string): void {
      window.open(url);
    }
}
