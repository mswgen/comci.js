// 2024-03-09

function 자료944(자료, 학년, 반) {
    var p, k, th, sb, 분리, 속성 = '',
        원자료, 일일자료, 강의실 = '';
    if (자료.분리 == undefined) {
        분리 = 100;
    } else {
        분리 = 자료.분리;
    }
    p = "<TABLE  style='width:380px; margin:3px 0px;'>";
    p += "<TR><td class='내용2' style='border:0px; text-align:left;'><input type='button' onClick='ba_NextDisp(-1);' value='◀'></td><TD style='border:0px;' colspan='4' class='내용2'>제 " + 학년 + " 학년 " + 반 + " 반 시간표 </TD><td class='내용2'style='border:0px; text-align:right;'><input type='button' onClick='ba_NextDisp(1);' value='▶'></td></TR>";
    p += 요일출력하기(자료.시작일);
    var 시작일 = new Date(자료.시작일);
    var 제한일 = new Date(자료.열람제한일);
    for (var 교시 = 1; 교시 <= 8; 교시++) {
        p += "<tr><td class='교시'>" + 자료.일과시간[교시 - 1] + "</td>";
        var dt = new Date(자료.시작일);
        dt.setDate(dt.getDate() - 1);
        for (var 요일 = 1; 요일 < 6; 요일++) {
            dt.setDate(dt.getDate() + 1);
            if (dt < 제한일 || 제한일.getFullYear() < 2014 || isNaN(제한일)) {
                원자료 = Q자료(자료.자료481[학년][반][요일][교시]);
                일일자료 = Q자료(자료.자료147[학년][반][요일][교시]);
                if (Q자료(자료.강의실) == 1) {
                    var m3 = 자료.자료245[학년][반][요일][교시];
                    강의실 = '';
                    if (m3 == undefined) {
                        m3 = " ";
                    }
                    if (m3.indexOf('_') > 0) {
                        var m2 = m3.split('_');
                        var 호수 = Number(m2[0]);
                        강의실 = m2[1];
                        if (호수 > 0) {
                            강의실 = '<br>' + 강의실;
                        } else {
                            강의실 = '';
                        }
                    }
                }
                if (원자료 == 일일자료) 속성 = '내용';
                else 속성 = '변경';
                if (일일자료 > 100) {
                    var 성명 = "",
                        m2 = "",
                        tt = "";
                    th = mTh(일일자료, 분리);
                    sb = mSb(일일자료, 분리);
                    tt = mTime(sb, 분리);
                    sb = sb % 분리;
                    if (th < 자료.자료446.length) {
                        성명 = 자료.자료446[th].substr(0, 2);
                    }
                    if (tt == '') {
                        m2 = 동시그룹코드(자료, 학년, 반, sb, 요일, 교시);
                    } else {
                        m2 = tt;
                    }
                    p += "<td class='" + 속성 + "' style='padding:4px 0px 4px 0px;'>" + m2 + 자료.자료492[sb] + "<br>" + 성명 + 강의실 + "</td>";
                } else {
                    p += "<td class='" + 속성 + "'></td>";
                }
            } else {
                p += "<td class='내용'></td>";
            }
        }
        p += "</tr>";
    }
    p += "</table>";
    return p;
}

function 학년시간표출력(자료, 학년, 요일) {
    var n, p, k, th, sb, 분리, 속성 = '',
        원자료, 일일자료, 강의실 = '';
    var 요일명 = ['일', '월', '화', '수', '목', '금', '토'];
    var 제한일 = new Date(자료.열람제한일);
    var dt = new Date(자료.시작일);
    if (자료.분리 == undefined) {
        분리 = 100;
    } else {
        분리 = 자료.분리;
    }
    dt.setDate(dt.getDate() + Number(요일) - 1);
    var 요일2 = 요일명[요일] + "(" + dt.getDate() + "일)";
    if (자료.학급수[학년] <= 1) {
        return '';
    }
    var 학급수 = 요일학급수(학년, 요일);
    n = 학급수 + 1 - 3; /* 자료.학급수[학년]+1-3; */
    var 요일선택 = 요일설정하기(자료, 요일);
    var 학년선택 = 학년설정하기(학년);
    p = "<TABLE  style='margin:3px 0px;'>";
    p += "<TR><td class='내용2'style='border:0px; text-align:left;'>" + 학년선택 + "</td><TD style='border:0px;' colspan='" + n + "' class='내용2'>제 " + 학년 + " 학년 시간표 " + 요일2 + "</TD><td class='내용2' style='border:0px; text-align:right;'><input type='button' onClick='yy_NextDisp(1);' value='▶'></td><td class='내용2'style='border:0px; text-align:right;'>" + 요일선택 + "</td></TR>";
    p += 학급출력하기(자료, 학년, 학급수);
    for (var 교시 = 1; 교시 <= 8; 교시++) {
        p += "<tr><td class='교시'>" + 자료.일과시간[교시 - 1] + "</td>";
        for (var 반 = 1; 반 <= 학급수; 반++) {
            if (dt < 제한일 || 제한일.getFullYear() < 2014 || isNaN(제한일)) {
                원자료 = Q자료(자료.자료481[학년][반][요일][교시]);
                일일자료 = Q자료(자료.자료147[학년][반][요일][교시]);
                if (Q자료(자료.강의실) == 1) {
                    var m3 = 자료.자료245[학년][반][요일][교시];
                    강의실 = '';
                    if (m3 == undefined) {
                        m3 = " ";
                    }
                    if (m3.indexOf('_') > 0) {
                        var m2 = m3.split('_');
                        var 호수 = Number(m2[0]);
                        강의실 = m2[1];
                        if (호수 > 0) {
                            강의실 = '<br>' + 강의실;
                        } else {
                            강의실 = '';
                        }
                    }
                }
                if (원자료 == 일일자료) {
                    if (반 == 4 || 반 == 8 || 반 == 12) {
                        속성 = '내용3';
                    } else {
                        속성 = '내용';
                    }
                } else {
                    속성 = '변경';
                }
                if (일일자료 > 100) {
                    var 성명 = "",
                        m2 = "",
                        tt = "";
                    th = mTh(일일자료, 분리);
                    sb = mSb(일일자료, 분리);
                    tt = mTime(sb, 분리);
                    sb = sb % 분리;
                    if (th < 자료.자료446.length) {
                        성명 = 자료.자료446[th].substr(0, 2);
                    }
                    if (tt == '') {
                        m2 = 동시그룹코드(자료, 학년, 반, sb, 요일, 교시);
                    } else {
                        m2 = tt;
                    }
                    p += "<td class='" + 속성 + "' style='padding:5px 2px 5px 2px;'>" + m2 + 자료.자료492[sb] + "<br>" + 성명 + 강의실 + "</td>";
                } else {
                    p += "<td class='" + 속성 + "'></td>";
                }
            } else {
                p += "<td class='내용'></td>";
            }
        }
        p += "</tr>";
    }
    p += "</table>";
    return p;
}

function 요일학급수(학년, 요일) {
    for (var 반 = H시간표.학급수[학년]; 반 > H시간표.학급수[학년] - H시간표.가상학급수[학년]; 반--) {
        for (var 교시 = 1; 교시 <= 8; 교시++) {
            if (Q자료(H시간표.자료147[학년][반][요일][교시]) > 100) {
                return 반;
            }
        }
    }
    return H시간표.학급수[학년] - H시간표.가상학급수[학년];
}

function 동시그룹코드(자료, 학년, 반, 과목, 요일, 교시) {
    var 분리, 학급, 학년2, 반2, 과목2, 교사, 과목3, ck, n2;
    if (자료.분리 == undefined) {
        분리 = 100;
    } else {
        분리 = 자료.분리;
    }
    if (!Array.isArray(자료.동시그룹)) {
        return '';
    }
    for (var i = 1; i <= 자료.동시그룹[0][0]; i++) {
        for (var j = 1; j <= 자료.동시그룹[i][0]; j++) {
            과목2 = Math.floor(자료.동시그룹[i][j] / 1000);
            학급 = 자료.동시그룹[i][j] - 과목2 * 1000;
            학년2 = Math.floor(학급 / 100);
            반2 = 학급 - 학년2 * 100;
            교사 = Math.floor(자료.자료481[학년2][반2][요일][교시] / 분리);
            과목3 = 자료.자료481[학년2][반2][요일][교시] - 교사 * 분리;
            if (!(과목2 == 과목3)) {
                ck = 0;
                break;
            }
            if (학년 == 학년2 && 반 == 반2 && 과목 == 과목2) {
                ck = 1;
            }
        }
        if (ck == 1) {
            if (i > 26) {
                n2 = i + 70;
            } else {
                n2 = i + 64;
            }
            return String.fromCharCode(n2) + "_";
        }
    }
    return '';
}

function 학급출력하기(자료, 학년, 학급수) {
    var p = "<tr><TD class='교시'>교시</td>";
    for (var 반 = 1; 반 <= 학급수; 반++) {
        p += "<TD class='제목'>" + 반 + "반</td>";
    }
    p += "</TR>";
    return p;
}

function 학년설정하기(학년) {
    var 선택;
    var p = "<select id='yy' name='yy' onchange='yy_change()'>";
    p += "<option value='0'>-학년-</option>";
    for (var i = 1; i <= 3; i++) {
        if (i == 학년) {
            선택 = "selected";
        } else {
            선택 = "";
        }
        p += "<option value='" + i + "' " + 선택 + ">" + i + "학년</option>";
    }
    return p;
}

function mTh(mm, m2) {
    if (m2 == 100) {
        return Math.floor(mm / m2);
    }
    return mm % m2;
}

function mSb(mm, m2) {
    if (m2 == 100) {
        return mm % m2;
    }
    return Math.floor(mm / m2);
}

function mSb2(mm, m2) {
    if (m2 == 100) {
        return mm % m2;
    }
    return Math.floor(mm / m2);
}

function mTime(mm, m2) {
    var t, n;
    if (m2 == 100) {
        return '';
    }
    t = Math.floor(mm / m2);
    if (t >= 1 && t <= 9) {
        n = t + 64;
        return String.fromCharCode(n) + "_";
    }
    return '';
}

function Q자료(m) {
    if (m == undefined) {
        return 0;
    } else {
        return m;
    }
}

function yy_change() {
    var 요일 = document.getElementById('yo').value;
    var 학년 = document.getElementById('yy').value;
    $('#hour2').empty().append(학년시간표출력(H시간표, 학년, 요일));
}

function yy_NextDisp(방향) {
    var m = document.getElementById('yy');
    var k = m.selectedIndex + 방향;
    if (k < 1) {
        k = m.length - 1;
    } else {
        if (k == (m.length)) {
            k = 1;
        }
    }
    m[k].selected = true;
    yy_change();
}

function 요일설정하기(자료, 요일2) {
    var 요일 = ['월', '화', '수', '목', '금', '토'],
        선택;
    var dt = new Date(자료.시작일);
    dt.setDate(dt.getDate() - 1);
    var p = "<select id='yo' name='yo' onchange='yo_change()'>";
    for (var i = 0; i < 5; i++) {
        dt.setDate(dt.getDate() + 1);
        if (요일2 == (i + 1)) {
            선택 = "selected";
        } else {
            선택 = "";
        }
        p += "<option value='" + (i + 1) + "' " + 선택 + ">&nbsp;&nbsp;" + 요일[i] + "&nbsp;</option>";
    }
    return p;
}

function yo_change() {
    var 요일 = document.getElementById('yo').value;
    var 학년 = document.getElementById('yy').value;
    $('#hour2').empty().append(학년시간표출력(H시간표, 학년, 요일));
}

function yo_NextDisp(방향) {
    var m = document.getElementById('yo');
    var k = m.selectedIndex + 방향;
    if (k < 1) {
        k = m.length - 1;
    } else {
        if (k == (m.length - 1)) {
            k = 1;
        }
    }
    m[k].selected = true;
    yo_change();
}

function 교사시간표_원자료생성(자료) {
    var 분리;
    if (자료.분리 == undefined) {
        분리 = 100;
    } else {
        분리 = 자료.분리;
    }
    자료.시간표2 = [];
    for (var 교사 = 1; 교사 <= 자료.교사수; 교사++) {
        자료.시간표2[교사] = [];
        for (var 요일 = 1; 요일 < 6; 요일++) {
            자료.시간표2[교사][요일] = [];
            for (var 교시 = 1; 교시 <= 8; 교시++) {
                자료.시간표2[교사][요일][교시] = 0;
            }
        }
    }
    for (var 학년 = 1; 학년 <= 3; 학년++) {
        for (var 반 = 1; 반 <= 자료.학급수[학년]; 반++) {
            for (var 요일 = 1; 요일 < 6; 요일++) {
                for (var 교시 = 1; 교시 <= 8; 교시++) {
                    var 원자료 = Q자료(자료.자료481[학년][반][요일][교시]);
                    var 교사2 = 0;
                    if (원자료 > 0) {
                        교사 = mTh(원자료, 분리);
                        if (교사 <= 자료.교사수) {
                            sb = mSb(원자료, 분리);
                            if (분리 == 100) {
                                자료.시간표2[교사][요일][교시] = (학년 * 100 + 반) * 분리 + sb;
                                if (교사2 > 0) 자료.시간표2[교사2][요일][교시] = (학년 * 100 + 반) * 분리 + sb;
                            } else {
                                자료.시간표2[교사][요일][교시] = sb * 분리 + 학년 * 100 + 반;
                                if (교사2 > 0) 자료.시간표2[교사2][요일][교시] = sb * 분리 + 학년 * 100 + 반;
                            }
                        }
                    }
                }
            }
        }
    }
}

function 자료473(자료, 교사) {
    var p, k, th, sb, 분리, 속성, 원자료, 일일자료, 강의실 = '';
    if (자료.분리 == undefined) {
        분리 = 100;
    } else {
        분리 = 자료.분리;
    }
    document.getElementById('ba')[0].selected = true;
    var 시작일 = new Date(자료.시작일);
    var 제한일 = new Date(자료.열람제한일);
    p = "<TABLE  style='width:380px; margin:3px 0px;'>";
    p += "<TR><td class='내용2' style='border:0px; text-align:left;'><input type='button' onClick='th_NextDisp(-1);' value='◀'></td><TD style='border:0px;' colspan='4' class='내용2'>" + 자료.자료446[교사] + " 시간표 </TD><td class='내용2'style='border:0px; text-align:right;'><input type='button' onClick='th_NextDisp(1);' value='▶'></td></TR>";
    p += 요일출력하기(자료.시작일);
    for (var 교시 = 1; 교시 <= 8; 교시++) {
        p += "<tr><td class='교시'>" + 자료.일과시간[교시 - 1] + "</td>";
        var dt = new Date(자료.시작일);
        dt.setDate(dt.getDate() - 1);
        for (var 요일 = 1; 요일 < 6; 요일++) {
            dt.setDate(dt.getDate() + 1);
            if (dt < 제한일 || 제한일.getFullYear() < 2014 || isNaN(제한일)) {
                교사자료 = Q자료(자료.자료542[교사][요일][교시]);
                원자료 = Q자료(자료.시간표2[교사][요일][교시]);
                if (원자료 == 교사자료) 속성 = '내용';
                else 속성 = '변경';
                if (교사자료 > 100) {
                    var m2 = "",
                        tt = "";
                    if (분리 == 100) {
                        학급 = mTh(교사자료, 분리);
                        학년 = Math.floor(학급 / 100);
                        반 = 학급 % 100;
                        sb = mSb(교사자료, 분리);
                        tt = mTime(sb, 분리);
                        sb = sb % 분리;
                    } else {
                        학급 = mTh(교사자료, 분리);
                        학년 = Math.floor(학급 / 100);
                        반 = 학급 % 100;
                        sb = mSb(교사자료, 분리);
                        tt = mTime(sb, 분리);
                        sb = sb % 분리;
                    }
                    일일자료 = Q자료(자료.자료147[학년][반][요일][교시]);
                    if (Q자료(자료.강의실) == 1) {
                        var m3 = 자료.자료245[학년][반][요일][교시];
                        강의실 = '';
                        if (m3 == undefined) {
                            m3 = " ";
                        }
                        if (m3.indexOf('_') > 0) {
                            var m2 = m3.split('_');
                            var 호수 = Number(m2[0]);
                            강의실 = m2[1];
                            if (호수 > 0) {
                                강의실 = '<br>' + 강의실;
                            } else {
                                강의실 = '';
                            }
                        }
                    }
                    if (일일자료 > 100) {
                        m2 = 동시그룹코드(자료, 학년, 반, sb, 요일, 교시);
                        if (tt == '') {
                            m2 = 동시그룹코드(자료, 학년, 반, sb, 요일, 교시);
                        } else {
                            m2 = tt;
                        }
                        p += "<td class='" + 속성 + "' style='padding:4px 0px 4px 0px;'>" + m2 + 학급 + '<br>' + 자료.자료492[sb] + 강의실 + "</td>";
                    } else {
                        p += "<td class='" + 속성 + "'></td>";
                    }
                } else {
                    p += "<td class='" + 속성 + "'></td>";
                }
            } else {
                p += "<td class='내용'></td>";
            }
        }
        p += "</tr>";
    }
    p += "</table>";
    return p;
}

function 교사명_설정하기(자료, n) {
    var p = "<option value=''>-교사-</option>";
    for (var i = 1; i <= 자료.교사수; i++) {
        if (n == i) {
            p += "<option value='" + i + "' selected>" + i + ' ' + 자료.자료446[i] + "</option>";
        } else {
            p += "<option value='" + i + "'>" + i + ' ' + 자료.자료446[i] + "</option>";
        }
    }
    return p;
}

function 학급설정하기(학급수, 가상학급수) {
    var p = "<option value=''>-학급-</option>";
    for (var 학년 = 1; 학년 <= 3; 학년++) {
        for (var 반 = 1; 반 <= (학급수[학년] - 가상학급수[학년]); 반++) {
            p += "<option value='" + 학년 + "-" + 반 + "'>" + 학년 + "-" + 반 + "</option>";
        }
    }
    return p;
}

function 일자설정하기(일자들, r) {
    var p = '';
    for (var i = 0; i < 일자들.length; i++) {
        if (r == 일자들[i][0]) {
            p += "<option value='" + 일자들[i][0] + "' selected>" + 일자들[i][1] + "</option>";
        } else {
            p += "<option value='" + 일자들[i][0] + "'>" + 일자들[i][1] + "</option>";
        }
    }
    return p;
}

function 요일출력하기(시작일) {
    var p = "<tr><TD class='교시'>교시</td>";
    var 요일 = ['월', '화', '수', '목', '금', '토'];
    var dt = new Date(시작일);
    dt.setDate(dt.getDate() - 1);
    for (var i = 0; i < 5; i++) {
        dt.setDate(dt.getDate() + 1);
        p += "<TD class='제목'>" + 요일[i] + "(" + dt.getDate() + ")</td>";
    }
    p += "</TR>";
    return p;
}

function 학교명단_출력하기(학교명단) {
    var p = "<tr class='검색'><td>지역</td><td>학교명</td></tr>";
    for (var i = 0; i < 학교명단.length; i++) {
        p += "<tr class='검색'><td>" + 학교명단[i][1] + "</td><td><a href='#' onClick='sc_disp(" + 학교명단[i][0] + ")'>" + 학교명단[i][2] + "</a></td></tr>";
    }
    $('#학교명단검색').empty().append(p);
}

function sc_data(sc, sc2, r, nw) {
    var da1 = '0';
    if (nw == '0' && (storage.sc == sc2 && storage.r == r)) {
        da1 = H시간표.자료244;
    }
    var s7 = sc + sc2;
    var sc3 = './36179_T?' + btoa(s7 + '_' + da1 + '_' + r);
    $.ajax({
        url: sc3,
        success: function (data) {
            if (data.length < 18) {
                초기화();
                return;
            }
            if (data.lastIndexOf('}') > 0) {
                var da = data.substr(0, data.lastIndexOf('}') + 1);
                H시간표 = JSON.parse(da);
                storage.hour = da;
                storage.r = r;
                storage.Tsc = sc2;
                if (da.length == 2) {
                    $('#hour').empty().append('');
                    $('#수정일').text('data no');
                }
            }
            화면구성하기(r);
        }
    });
}

function scode_change() {
    var r = document.getElementById('nal').value;
    var sc = document.getElementById('scode').value;
    sc_data('73629_', sc, r, '0');
}

function nal_change() {
    var r = document.getElementById('nal').value;
    var sc = document.getElementById('scode').value;
    sc_data('73629_', sc, r, '0');
}

function th_change() {
    var 교사 = Number(document.getElementById('th').value);
    storage.Tth = 교사;
    $('#hour').empty().append(자료473(H시간표, 교사));
    학년 = 교사_학년(교사);
    학년출력하기(학년);
}

function 교사_학년(교사) {
    var 분리, d = new Date(),
        요일 = d.getDay();
    if (H시간표.분리 == undefined) {
        분리 = 100;
    } else {
        분리 = H시간표.분리;
    }
    if (요일 == 0) 요일 = 1;
    if (요일 == 6) 요일 = 5;
    for (var 교시 = 1; 교시 <= 8; 교시++) {
        원자료 = Q자료(H시간표.시간표2[교사][요일][교시]);
        if (원자료 > 100) {
            학급 = mTh(원자료, 분리);
            학년 = Math.floor(학급 / 100);
            return 학년;
        }
    }
    return 1;
}

function th_NextDisp(방향) {
    var m = document.getElementById('th');
    var k = m.selectedIndex + 방향;
    if (k < 1) {
        k = m.length - 1;
    } else if (k == (m.length - 1)) {
        k = 1;
    }
    m[k].selected = true;
    th_change();
}

function ba_change() {
    document.getElementById('th')[0].selected = true;
    var m = document.getElementById('ba').value;
    var m2 = m.split('-');
    var 학년 = Number(m2[0]);
    var 반 = Number(m2[1]);
    $('#hour').empty().append(자료944(H시간표, 학년, 반));
    학년출력하기(학년);
}

function ba_NextDisp(방향) {
    var m = document.getElementById('ba');
    var k = m.selectedIndex + 방향;
    if (k < 1) {
        k = m.length - 1;
    } else {
        if (k == (m.length - 1)) {
            k = 1;
        }
    }
    m[k].selected = true;
    ba_change();
}

function new_change() {
    var r = document.getElementById('nal').value;
    sc_data('73629_', storage.sc, r, '1');
    alert('새로고침 하였습니다.');
}

function 학년출력하기(학년) {
    var 요일;
    var elem = document.getElementById('yo');
    if (elem !== null && elem !== 'undefined') {
        var 요일 = document.getElementById('yo').value;
    } else {
        var d = new Date(),
            요일 = d.getDay();
        if (요일 == 0) 요일 = 1;
    }
    if (요일 == 0) 요일 = 1;
    if (요일 == 6) 요일 = 5;
    $('#hour2').empty().append(학년시간표출력(H시간표, 학년, 요일));
}

function 화면구성하기(r) {
    var r2, 학년 = 1;
    교사시간표_원자료생성(H시간표);
    if (r > 0) {
        r2 = r;
    } else {
        r2 = H시간표.오늘r;
    }
    $('#nal').empty().append(일자설정하기(H시간표.일자자료, r2));
    $('#th').empty().append(교사명_설정하기(H시간표, 1));
    $('#ba').empty().append(학급설정하기(H시간표.학급수, H시간표.가상학급수));
    var 교사 = Number(storage.Tth);
    document.getElementById('th')[교사].selected = true;
    $('#수정일').text('수정일: ' + H시간표.자료244);
    $('#hour').show();
    th_change();
    H시간표.컴시간 = '<p>아이폰용 컴시간알리미앱이 개발되었습니다.<p>앱스토어에서 [컴시간알리미]앱을 설치하시기 바랍니다.';
    학년 = 교사_학년(교사);
    학년출력하기(학년);
    컴시간_메세지출력();
    학교_메세지출력();
    $('#mesg3').empty();
}

function 컴시간_메세지출력() {
    if (H시간표.컴시간 == undefined) {
        $('#mesg').empty();
    } else {
        var p = "<TABLE style='width:380px; padding:1px; border:1px lightgrey solid; margin: 1px 0px;'>";
        p += "<TR style='height:8px;'><TD style='border:1px lightgrey; text-align:center; font-size:10pt; font-weight:bold;' class='내용4'>컴시간 전달사항</TD></tr><tr  style='height:100px;'><TD style='border:0px; text-align:left;' class='내용'>" + H시간표.컴시간 + "</TD></td></TR></table>";
        $('#mesg').empty().append(p);
    }
}

function 학교_메세지출력() {
    if (H시간표.학교전달 == undefined) {
        $('#mesg2').empty();
    } else {
        var p = "<TABLE style='width:380px; padding:1px; border:1px lightgrey solid; margin: 1px 0px;'>";
        p += "<TR style='height:8px;'><TD style='border:1px lightgrey; text-align:center; font-size:10pt; font-weight:bold;' class='내용4'>학교 전달사항</TD></tr><tr  style='height:100px;'><TD style='border:0px; text-align:left;' class='내용'>" + H시간표.학교전달 + "</TD></td></TR></table>";
        $('#mesg2').empty().append(p);
    }
}

function 컴시간_메세지출력3() {
    var p = "<TABLE style='width:380px; padding:1px; border:1px lightgrey solid; margin: 1px 0px;'>";
    p += "<tr class='검색'><td colspan=2 style='height:40pt; text-align:left;line-height:180%;'>&nbsp;&nbsp;매번 학교코드를 입력하는 경우는<br> <span style='font-size:11pt'>&nbsp;&nbsp;<strong>[ <a href=http://comci.net:4082/th target=_blank>http://comci.net:4082/th</a> ]</strong></span>로 접속하고 즐겨찾기하세요.</td></tr></table>";
    $('#mesg3').empty().append(p);
}

function 초기화() {
    $('#nal').empty().append("<option value=''>-일자-</option>");
    $('#th').empty().append("<option value=''>-교사-</option>");
    $('#ba').empty().append("'<option value=''>-학급-</option>");
    $('#hour').hide();
    $('#hour2').empty();
    var sc = document.getElementById('scode').value;
    if (sc == '') {
        $('#수정일').text("학교코드를 설정해주세요.");
    } else {
        $('#수정일').text("학교코드가 맞지 않거나 자료가 없습니다.");
    }
}

function logoLoad2() {
    logoLoad('logo');
}

function logoLoad(id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(178, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 36);
    ctx.quadraticCurveTo(0, 0, 178, 0);
    ctx.fillStyle = 'rgb(129,163, 254)';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, 36);
    ctx.lineTo(178, 36);
    ctx.lineTo(178, 0);
    ctx.moveTo(0, 36);
    ctx.quadraticCurveTo(0, 0, 178, 0);
    ctx.fillStyle = 'rgb(213,240, 249)';
    ctx.fill();
    ctx.fillRect(178, 0, 340, 36);
    ctx.font = '16pt 맑은고딕';
    ctx.fillStyle = 'rgb(93,143, 254)';
    ctx.fillText('컴시간', 82, 28);
    ctx.strokeStyle = 'rgb(93,143, 254)';
    ctx.strokeText('컴시간', 82, 28);
}