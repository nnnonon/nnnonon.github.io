var qdata = `#나는 심심할 때...
E스마트폰을 한다.
I취미생활을 한다.
#잠자기 전에...
I알람, 일정만 확인 후 그냥 잔다.
E스마트폰을 하다 늦게 잠든다.
#여행을 가는 길에...
I가족 혹은 친구와 이야기한다.
E스마트폰은 꼭 봐야한다.
#손에 스마트폰을 놓으면...
S주머니에 두는건 괜찮다.
N꼭 손에 갖고있어야 한다.
#집안 화장실에 갈 때 스마트폰을...
S가끔 들고간다.
N꼭 들고가야 한다.
#길을 걸을 때 나는...
S알림이 뜨면 확인한다.
N심심하니 스마트폰을 보며 걷는다.
#한 번 보면 나는...
J'이것만 볼까?' 하다가 시간이 많이 지나있다.
P보다가 그만 둘 수 있다.
#스마트폰이 옆에 있으면...
P알림 이외에는 잘 확인하지 않는다.
J자꾸 신경쓰여 다른 일에 집중하기 어렵다.
#스마트폰 때문에...
J친구, 부모님 등과 갈등이 있을때가 있다.
P갈등은 없었다.
#스마트폰 사용으로 인한...
T건강문제는 전혀 없다.
F가끔 손목이나 눈, 목등이 아프다.
#스마트폰 사용시간을...
T줄이자고 생각하거나 혹은 사용시간이 적다.
F줄이자고 생각한 적은 없다.
#나는 스마트폰을...
T가끔은 없어도 괜찮다.
F갖고있어야 한다.`;

var rdata = ``;

var hdata = `ENTJ#ISFP#ISFJ
ENTP#ISFJ#ISFP
INTJ#ESFP#ESFJ
INTP#ESFJ#ESFP
ESTJ#INFP#INFJ
ESFJ#INTP#INTJ
ISTJ#ENFP#ENFJ
ISFJ#ENTP#ENTJ
ENFJ#ISTP#ISTJ
ENFP#ISTJ#ISTP
INFJ#ESTP#ESTJ
INFP#ESTJ#ESTP
ESTP#INFJ#INFP
ESFP#INTJ#INTP
ISTP#ENFJ#ENFP
ISFP#ENTJ#ENTP`;

var pdata =  `ENFJ#
ENFP#
ENTJ#
ENTP#
ESFJ#
ESFP#
ESTJ#
ESTP#
INFJ#
INFP#
INTJ#
INTP#
ISFJ#
ISFP#
ISTJ#
ISTP#`;


function loadFile(filePath) {
  var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "datas/"+filePath, false);
    var allText="";
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}
