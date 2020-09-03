// pages/guide/guide.js
import {
  CDN_PATH
} from '../../config/appConfig';
const INIT_POLYLINE = {
  points: [{
      latitude: 23.428800707924342,
      longitude: 113.17443609237671
    }, //1
    {
      latitude: 23.428618588325772,
      longitude: 113.17415177822113
    }, //2
    {
      latitude: 23.42853983382707,
      longitude: 113.17273557186127
    }, //3
    {
      latitude: 23.428264192712238,
      longitude: 113.17240297794342
    }, //4
    {
      latitude: 23.42902220439535,
      longitude: 113.17175388336182
    }, //5
    {
      latitude: 23.429780211732822,
      longitude: 113.17111551761627
    }, //6
    {
      latitude: 23.43070064337162,
      longitude: 113.17063271999359
    }, //7
    {
      latitude: 23.431463563135043,
      longitude: 113.17042350769043
    }, //8
    {
      latitude: 23.431931156942976,
      longitude: 113.17032158374786
    }, //9
    {
      latitude: 23.433762139935904,
      longitude: 113.1701982021331
    }, //10
    {
      latitude: 23.434047613493583,
      longitude: 113.17012310028076
    }, //11
    {
      latitude: 23.43450535429067,
      longitude: 113.17010700702667
    }, //12
    {
      latitude: 23.434825279713117,
      longitude: 113.17014992237091
    }, //13
    {
      latitude: 23.43553895671135,
      longitude: 113.1703644990921
    }, //14
    {
      latitude: 23.436237864243953,
      longitude: 113.17082047462463
    }, //15
    {
      latitude: 23.43621817675841,
      longitude: 113.17127108573914
    }, //16
    {
      latitude: 23.436897393315064,
      longitude: 113.17131400108337
    }, //17
    {
      latitude: 23.437734104564733,
      longitude: 113.17095458507538
    }, //18
    {
      latitude: 23.438556045164088,
      longitude: 113.17054688930511
    }, //19
    {
      latitude: 23.439220484427103,
      longitude: 113.17030012607574
    }, //20
    {
      latitude: 23.439338606613017,
      longitude: 113.17190945148468
    }, //21
    {
      latitude: 23.439333684857377,
      longitude: 113.17261755466461
    }, //22
    {
      latitude: 23.43880705594496,
      longitude: 113.17267656326294
    }, //23
    {
      latitude: 23.438733229294183,
      longitude: 113.17314863204956
    }, //24
    // {
    //   latitude: 23.438560966948682,
    //   longitude: 113.17317545413971
    // },//25
    {
      latitude: 23.43885135191562,
      longitude: 113.1731379032135
    }, //26
    {
      latitude: 23.4386889332839,
      longitude: 113.17349195480347
    }, //27
    {
      latitude: 23.438639715477343,
      longitude: 113.17371726036072
    }, //28
    {
      latitude: 23.438595419435746,
      longitude: 113.17392647266388
    }, //29
    {
      latitude: 23.43862987191383,
      longitude: 113.17433416843414
    }, //30
    {
      latitude: 23.438511749094438,
      longitude: 113.17477405071259
    }, //31
    {
      latitude: 23.437832540834094,
      longitude: 113.17480623722076
    }, //32
    {
      latitude: 23.43777347908128,
      longitude: 113.17440390586853
    }, //33
    {
      latitude: 23.43725176578509,
      longitude: 113.17441999912262
    }, //34
    {
      latitude: 23.43624278611488,
      longitude: 113.17394256591797
    }, //35
    {
      latitude: 23.435662004080207,
      longitude: 113.1740015745163
    }, //36
    {
      latitude: 23.435189501559186,
      longitude: 113.17423224449158
    }, //37
    {
      latitude: 23.43510582906173,
      longitude: 113.17451119422913
    }, //38
    {
      latitude: 23.435002468844676,
      longitude: 113.1752997636795
    }, //39
    {
      latitude: 23.434785904318304,
      longitude: 113.17539632320404
    }, //40
    {
      latitude: 23.43437738390488,
      longitude: 113.17443609237671
    }, //42
    {
      latitude: 23.43467762192205,
      longitude: 113.17402303218842
    }, //43
    {
      latitude: 23.434008237867108,
      longitude: 113.17274630069733
    }, //44
    {
      latitude: 23.433757217972598,
      longitude: 113.17251026630402
    }, //45
    {
      latitude: 23.43327978666167,
      longitude: 113.172327876091
    }, //46
    {
      latitude: 23.432974623477147,
      longitude: 113.17230641841888
    }, //47
    {
      latitude: 23.432758055628508,
      longitude: 113.17234396934509
    }, //48
    {
      latitude: 23.432310152815887,
      longitude: 113.17256927490234
    }, //49
    {
      latitude: 23.431837638313702,
      longitude: 113.17330420017242
    }, //50
    {
      latitude: 23.43204436361621,
      longitude: 113.1734973192215
    }, //51
    {
      latitude: 23.43187701458672,
      longitude: 113.17373335361481
    }, //52
    {
      latitude: 23.433097673233085,
      longitude: 113.17497789859772
    }, //53
    {
      latitude: 23.432940169524965,
      longitude: 113.17524075508118
    }, //54
    {
      latitude: 23.432925403542704,
      longitude: 113.17560017108917
    }, //55
    {
      latitude: 23.433407758110032,
      longitude: 113.17612588405609
    }, //56
    {
      latitude: 23.433412680086352,
      longitude: 113.17627608776093
    }, //57
    {
      latitude: 23.432954935505574,
      longitude: 113.17693054676056
    }, //58

    {
      latitude: 23.432758055628508,
      longitude: 113.17679643630981
    }, //59
    {
      latitude: 23.432605473522113,
      longitude: 113.17695736885071
    }, //60
    {
      latitude: 23.432497189339763,
      longitude: 113.17687153816223
    }, //61
    {
      latitude: 23.43255133144202,
      longitude: 113.17678034305573
    }, //62
    {
      latitude: 23.432034519561526,
      longitude: 113.17628681659698
    }, //63
    {
      latitude: 23.43189178068608,
      longitude: 113.17643702030182
    }, //64
    {
      latitude: 23.431296213370338,
      longitude: 113.17586302757263
    }, //65
    {
      latitude: 23.43121253840855,
      longitude: 113.17594349384308
    }, //66
    {
      latitude: 23.43087783803177,
      longitude: 113.17555725574493
    }, //67
    {
      latitude: 23.4307990848788,
      longitude: 113.17561089992523
    }, //68
    {
      latitude: 23.430262577775807,
      longitude: 113.17501544952393
    }, //69
    {
      latitude: 23.43014444747902,
      longitude: 113.17511200904846
    }, //70
    {
      latitude: 23.42983927705712,
      longitude: 113.17457556724548
    }, //71
    {
      latitude: 23.42969161369687,
      longitude: 113.1746506690979
    }, //72
    {
      latitude: 23.429337220959436,
      longitude: 113.17423224449158
    }, //73
    {
      latitude: 23.42948488471548,
      longitude: 113.1740391254425
    }, //74
    {
      latitude: 23.42943074135740,
      longitude: 113.17393183708191
    }, //75
    {
      latitude: 23.428800707924342,
      longitude: 113.17443609237671
    }, //1
  ],
  color: '#3875FF',
  width: 2,
  dottedLine: true
};
const INIT_POLYGON = {
  points: [{
      latitude: 23.428800707924342,
      longitude: 113.17443609237671
    }, //1
    {
      latitude: 23.428618588325772,
      longitude: 113.17415177822113
    }, //2
    {
      latitude: 23.42853983382707,
      longitude: 113.17273557186127
    }, //3
    {
      latitude: 23.428264192712238,
      longitude: 113.17240297794342
    }, //4
    {
      latitude: 23.42902220439535,
      longitude: 113.17175388336182
    }, //5
    {
      latitude: 23.429780211732822,
      longitude: 113.17111551761627
    }, //6
    {
      latitude: 23.43070064337162,
      longitude: 113.17063271999359
    }, //7
    {
      latitude: 23.431463563135043,
      longitude: 113.17042350769043
    }, //8
    {
      latitude: 23.431931156942976,
      longitude: 113.17032158374786
    }, //9
    {
      latitude: 23.433762139935904,
      longitude: 113.1701982021331
    }, //10
    {
      latitude: 23.434047613493583,
      longitude: 113.17012310028076
    }, //11
    {
      latitude: 23.43450535429067,
      longitude: 113.17010700702667
    }, //12
    {
      latitude: 23.434825279713117,
      longitude: 113.17014992237091
    }, //13
    {
      latitude: 23.43553895671135,
      longitude: 113.1703644990921
    }, //14
    {
      latitude: 23.436237864243953,
      longitude: 113.17082047462463
    }, //15
    {
      latitude: 23.43621817675841,
      longitude: 113.17127108573914
    }, //16
    {
      latitude: 23.436897393315064,
      longitude: 113.17131400108337
    }, //17
    {
      latitude: 23.437734104564733,
      longitude: 113.17095458507538
    }, //18
    {
      latitude: 23.438556045164088,
      longitude: 113.17054688930511
    }, //19
    {
      latitude: 23.439220484427103,
      longitude: 113.17030012607574
    }, //20
    {
      latitude: 23.439338606613017,
      longitude: 113.17190945148468
    }, //21
    {
      latitude: 23.439333684857377,
      longitude: 113.17261755466461
    }, //22
    {
      latitude: 23.43880705594496,
      longitude: 113.17267656326294
    }, //23
    {
      latitude: 23.438733229294183,
      longitude: 113.17314863204956
    }, //24
    // {
    //   latitude: 23.438560966948682,
    //   longitude: 113.17317545413971
    // },//25
    {
      latitude: 23.43885135191562,
      longitude: 113.1731379032135
    }, //26
    {
      latitude: 23.4386889332839,
      longitude: 113.17349195480347
    }, //27
    {
      latitude: 23.438639715477343,
      longitude: 113.17371726036072
    }, //28
    {
      latitude: 23.438595419435746,
      longitude: 113.17392647266388
    }, //29
    {
      latitude: 23.43862987191383,
      longitude: 113.17433416843414
    }, //30
    {
      latitude: 23.438511749094438,
      longitude: 113.17477405071259
    }, //31
    {
      latitude: 23.437832540834094,
      longitude: 113.17480623722076
    }, //32
    {
      latitude: 23.43777347908128,
      longitude: 113.17440390586853
    }, //33
    {
      latitude: 23.43725176578509,
      longitude: 113.17441999912262
    }, //34
    {
      latitude: 23.43624278611488,
      longitude: 113.17394256591797
    }, //35
    {
      latitude: 23.435662004080207,
      longitude: 113.1740015745163
    }, //36
    {
      latitude: 23.435189501559186,
      longitude: 113.17423224449158
    }, //37
    {
      latitude: 23.43510582906173,
      longitude: 113.17451119422913
    }, //38
    {
      latitude: 23.435002468844676,
      longitude: 113.1752997636795
    }, //39
    {
      latitude: 23.434785904318304,
      longitude: 113.17539632320404
    }, //40
    {
      latitude: 23.43437738390488,
      longitude: 113.17443609237671
    }, //42
    {
      latitude: 23.43467762192205,
      longitude: 113.17402303218842
    }, //43
    {
      latitude: 23.434008237867108,
      longitude: 113.17274630069733
    }, //44
    {
      latitude: 23.433757217972598,
      longitude: 113.17251026630402
    }, //45
    {
      latitude: 23.43327978666167,
      longitude: 113.172327876091
    }, //46
    {
      latitude: 23.432974623477147,
      longitude: 113.17230641841888
    }, //47
    {
      latitude: 23.432758055628508,
      longitude: 113.17234396934509
    }, //48
    {
      latitude: 23.432310152815887,
      longitude: 113.17256927490234
    }, //49
    {
      latitude: 23.431837638313702,
      longitude: 113.17330420017242
    }, //50
    {
      latitude: 23.43204436361621,
      longitude: 113.1734973192215
    }, //51
    {
      latitude: 23.43187701458672,
      longitude: 113.17373335361481
    }, //52
    {
      latitude: 23.433097673233085,
      longitude: 113.17497789859772
    }, //53
    {
      latitude: 23.432940169524965,
      longitude: 113.17524075508118
    }, //54
    {
      latitude: 23.432925403542704,
      longitude: 113.17560017108917
    }, //55
    {
      latitude: 23.433407758110032,
      longitude: 113.17612588405609
    }, //56
    {
      latitude: 23.433412680086352,
      longitude: 113.17627608776093
    }, //57
    {
      latitude: 23.432954935505574,
      longitude: 113.17693054676056
    }, //58

    {
      latitude: 23.432758055628508,
      longitude: 113.17679643630981
    }, //59
    {
      latitude: 23.432605473522113,
      longitude: 113.17695736885071
    }, //60
    {
      latitude: 23.432497189339763,
      longitude: 113.17687153816223
    }, //61
    {
      latitude: 23.43255133144202,
      longitude: 113.17678034305573
    }, //62
    {
      latitude: 23.432034519561526,
      longitude: 113.17628681659698
    }, //63
    {
      latitude: 23.43189178068608,
      longitude: 113.17643702030182
    }, //64
    {
      latitude: 23.431296213370338,
      longitude: 113.17586302757263
    }, //65
    {
      latitude: 23.43121253840855,
      longitude: 113.17594349384308
    }, //66
    {
      latitude: 23.43087783803177,
      longitude: 113.17555725574493
    }, //67
    {
      latitude: 23.4307990848788,
      longitude: 113.17561089992523
    }, //68
    {
      latitude: 23.430262577775807,
      longitude: 113.17501544952393
    }, //69
    {
      latitude: 23.43014444747902,
      longitude: 113.17511200904846
    }, //70
    {
      latitude: 23.42983927705712,
      longitude: 113.17457556724548
    }, //71
    {
      latitude: 23.42969161369687,
      longitude: 113.1746506690979
    }, //72
    {
      latitude: 23.429337220959436,
      longitude: 113.17423224449158
    }, //73
    {
      latitude: 23.42948488471548,
      longitude: 113.1740391254425
    }, //74
    {
      latitude: 23.42943074135740,
      longitude: 113.17393183708191
    }, //75
  ],
  strokeWidth: 2
};

Page({
  data: {
    markerIds:['校门口','摆渡车校门站','行政楼','校铭石','校卫生所','公用洗手间',
    '图书馆','一饭堂(一楼)','二饭堂(二楼)','商业街','体育中心','田径运动场','C12宿舍楼',
    '三饭堂','明辨湖','学生活动中心','游泳馆','四饭堂','摆渡车四饭站','C17宿舍楼','心形湖'],
    latitude: "23.433757217972598",
    longitude: "113.17205429077148",
    scale: 16,
    polyline: [{
      ...INIT_POLYLINE
    }],
    polygons: [{
      ...INIT_POLYGON,
      fillColor: '#118EE24D',
      strokeColor: '#118EE200'
    }],
    markers: [{
        iconPath: "../../images/marker.png",
        id: 0,
        latitude: 23.4287711750335,
        longitude: 113.17437708377838,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记0
      {
        iconPath: "../../images/marker.png",
        id: 1,
        latitude: 23.42961285983731,
        longitude: 113.17370653152466,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        },
        title: 'dddd'
      }, //标记1
      {
        iconPath: "../../images/marker.png",
        id: 2,
        latitude: 23.43027734405549,
        longitude: 113.17428588867188,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        },
      }, //标记2
      {
        iconPath: "../../images/marker.png",
        id: 3,
        latitude: 23.430311798701656,
        longitude: 113.17317008972168,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记3
      {
        iconPath: "../../images/marker.png",
        id: 4,
        latitude: 23.42881055221982,
        longitude: 113.17351341247559,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记4
      {
        iconPath: "../../images/marker.png",
        id: 5,
        latitude: 23.428859773686234,
        longitude: 113.17407131195068,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记5
      {
        iconPath: "../../images/marker.png",
        id: 6,
        latitude: 23.431872092553228,
        longitude: 113.1710135936737,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记6
      {
        iconPath: "../../images/marker.png",
        id: 7,
        latitude: 23.432502111349972,
        longitude: 113.17053616046906,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记7
      {
        iconPath: "../../images/marker.png",
        id: 8,
        latitude: 23.432846651609474,
        longitude: 113.17050397396088,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记8
      {
        iconPath: "../../images/marker.png",
        id: 9,
        latitude: 23.433191190970987,
        longitude: 113.17166268825531,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记9
      {
        iconPath: "../../images/marker.png",
        id: 10,
        latitude: 23.435307627347793,
        longitude: 113.17204356193542,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记10
      {
        iconPath: "../../images/marker.png",
        id: 11,
        latitude: 23.434633324552568,
        longitude: 113.17060053348541,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记11
      {
        iconPath: "../../images/marker.png",
        id: 12,
        latitude: 23.43627723920625,
        longitude: 113.17296624183655,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记12
      {
        iconPath: "../../images/marker.png",
        id: 13,
        latitude: 23.4358145826585,
        longitude: 113.17228496074677,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记13
      {
        iconPath: "../../images/marker.png",
        id: 14,
        latitude: 23.432177258282845,
        longitude: 113.17179143428802,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记14
      {
        iconPath: "../../images/marker.png",
        id: 15,
        latitude: 23.43488434278337,
        longitude: 113.17327201366425,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记15
      {
        iconPath: "../../images/marker.png",
        id: 16,
        latitude: 23.43476621661648,
        longitude: 113.17420542240143,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记16
      {
        iconPath: "../../images/marker.png",
        id: 17,
        latitude: 23.43802941315287,
        longitude: 113.17271411418915,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记17
      {
        iconPath: "../../images/marker.png",
        id: 18,
        latitude: 23.437739026379937,
        longitude: 113.1725424528122,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记18
      {
        iconPath: "../../images/marker.png",
        id: 19,
        latitude: 23.43785714988998,
        longitude: 113.17195773124695,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
         
        }
      }, //标记19
      {
        iconPath: "../../images/marker.png",
        id: 20,
        latitude: 23.43860034121888,
        longitude: 113.17392647266388,
        width: 17,
        height: 21,
        customCallout: {
          display: 'ALWAYS',
          
        }
      }, //标记20
    ],
  },
  onShow: function() {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude

        })
        var timer = setTimeout(function() {
          that.setData({
            scale: 17
          })
          clearTimeout(timer)
        }, 1500)
      },
    })
  }
});