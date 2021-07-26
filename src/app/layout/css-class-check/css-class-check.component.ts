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
    showFutureShopUrl: string;
    showType: JsonType;

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
        // this.showLoading = true;
        const inputSelector: string = this.fg.get('inputStyleStr').value;
        const isSp: boolean = this.fg.get('isSp').value;
        const isPc: boolean = this.fg.get('isPc').value;
        const isLogout: boolean = this.fg.get('isLogout').value;
        const isLogin: boolean = this.fg.get('isLogin').value;
        for (let i = 0; i < 2; i++) {
            if (isSp && isLogout) {
                this.execCheckInputSelector(
                    spLogoutSources.spLogoutSources,
                    JsonType.spLogout,
                    inputSelector,
                    i === 0 ? MatchCase.class : MatchCase.id);
            }
            if (isSp && isLogin) {
                this.execCheckInputSelector(
                    spLoginSources.spLoginSources,
                    JsonType.spLogin,
                    inputSelector,
                    i === 0 ? MatchCase.class : MatchCase.id);
            }
            if (isPc && isLogout) {
                this.execCheckInputSelector(
                    pcLogoutSources.pcLogoutSources,
                    JsonType.pcLogout,
                    inputSelector,
                    i === 0 ? MatchCase.class : MatchCase.id);
            }
            if (isPc && isLogin) {
                this.execCheckInputSelector(
                    pcLoginSources.pcLoginSources,
                    JsonType.pcLogin,
                    inputSelector,
                    i === 0 ? MatchCase.class : MatchCase.id);
            }
        }
    }

    private createConfirmPageList(jsonList: object[]): void {
        jsonList.forEach(json => {
            this.confirmPageList.push({
                pageId: json['pageId'],
                pageName: json['pageName'],
                url: json['url'],
                futureShopUrl: !!json['futureShopUrl'] ? json['futureShopUrl'] : ''
            });
        });
    }

    private execCheckInputSelector(htmlJson: object, jsonType: JsonType, inputSelector: string, matchCase: MatchCase): void {
        const jsonTypeLabel: string = JsonTypeHashMap.find(jt => jt.jsonType === jsonType).label;
        let isFirstMatch = false;
        for (const [key, value] of Object.entries(htmlJson)) {
            const html = htmlJson[key]['source'];
            const checkAttrList = this.getTargetAttributeList(html, matchCase);
            let retMatchCount = 0;
            if (checkAttrList) {
                retMatchCount = this.execSelectorMatchCheck(inputSelector, checkAttrList, matchCase);
            }
            if (retMatchCount > 0) {
                this.resultList.push({
                    pageId: value.pageId,
                    pageName: value.pageName,
                    url: value.url,
                    typeLabel: jsonTypeLabel,
                    type: jsonType,
                    matchCase: matchCase === MatchCase.class ? MatchCase.class : MatchCase.id,
                    matchCount: retMatchCount,
                    futureShopUrl: !!value.futureShopUrl ? value.futureShopUrl : '',
                    isFirstMatch: !isFirstMatch
                });
                isFirstMatch = true;
            }
        }
    }

    private execSelectorMatchCheck(inputSelector, checkAttrList: string[], matchCase: MatchCase): number {
      let hitCount = 0;
      checkAttrList.forEach(v => {
          if (matchCase === MatchCase.class) {
              v = v.replace('class=', '');
          } else {
              v = v.replace('id=', '');
          }
          if ( v === "'" + inputSelector + "'" ||
              v.startsWith("'" + inputSelector + ' ') ||
              v.endsWith(' ' + inputSelector + "'") ||
              ~v.indexOf(' ' + inputSelector + ' ') ) {
              hitCount++;
          }
        });

      return hitCount;
    }

    private getTargetAttributeList(html: string, matchCase: MatchCase): string[] {
        const attr = MatchCaseHashMap.find(m => m.caseId === matchCase).label;
        const regExp = new RegExp(`${attr}='([^']*)'`, 'g');
        return !!html ? html.match(regExp) : [];
    }

    goToTargetPage(url: string): void {
        window.open(url);
    }

    showFutureShopUrlInfo(url: string, type?: JsonType): void {
        this.showFutureShopUrl = url;
        this.showType = type;
    }

    balloonClose(): void {
        this.showFutureShopUrl = '';
        this.showType = 9;
    }

    copyMessage(val: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    notAction(): void {
        return;
    }
}
