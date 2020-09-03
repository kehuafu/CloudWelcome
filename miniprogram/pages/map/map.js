// pages/map/map.js
Page({
  data: {
    markers: [{
      iconPath: "",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      title: "哈哈哈"
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#07C160",
      width: 3,
      dottedLine: false
    }],
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 0,
        top: 300,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    polygon: [{
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
      strokeColor: "#07C160",
      strokeWidth: 2,
      fillColor: '#07C160'
    }]
  },
  regionchange(e) {
    //console.log(e.type)
  },
  markertap(e) {
    //console.log(e.detail.markerId)
  },
  controltap(e) {
    //console.log(e.detail.controlId)
  },
  onShow: function() {
    // var that = this
    // wx.getLocation({
    //   success: function(res) {
    //     console.log(res)
    //     that.setData({
    //       ['markers.latitude']: res.latitude,
    //       ['markers.longitude']: res.longitude,
    //       ['polyline.points[0].latitude']: res.latitude,
    //       ['polyline.points[0].longitude']: res.longitude,
    //       ['polyline.points[1].latitude']: res.latitude,
    //       ['polyline.points[1].longitude']: res.longitude,
    //     })
    //   },
    // })
  },
  bindtap(ev) {
    console.log(ev)
  }
})