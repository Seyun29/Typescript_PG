// //취소표잡기용
// const cheatFunc = () => {
//   //Refresh canvas
//   document.querySelector("#btn_refresh").click();
//   //Next btn
//   const next = document.querySelector(
//     "#container > div.reserve_content > div.reserve_right.ng-isolate-scope > div.reserve_btn.ng-scope > a"
//   );
//   //Navigate on press ‘5’
//   document.addEventListener("keydown", (e) => {
//     if (e.keyCode == 53) {
//       e.preventDefault();
//       console.log("enter clicked : navigate!");
//       next.click();
//     }
//   });
// };
// //Refresh block on press ‘4’
// document.addEventListener("keydown", (e) => {
//   if (e.keyCode == 52) {
//     e.preventDefault();
//     console.log("refresh blocks");
//     cheatFunc();
//   }
// });
// 좌석수 확인

//테이블석만 노리기
// const tables = {
//   90679: [115866, 115786, 115785, 115784, 115783, 115782, 115938],
//   90682: [115787, 115939, 115868, 115867, 115870, 115869],
//   90681: [115866, 115938],
// };

//순서대로 다 노리기
const tableArray = [
  {
    grade: "90677",
    blocks: [115865, 115791, 115790, 115789, 115788, 115793, 115792],
  },
  { grade: "90678", blocks: [115793, 115865] },
  {
    grade: "90679",
    blocks: [115866, 115786, 115785, 115784, 115783, 115782, 115938],
  },
  {
    grade: "90680",
    blocks: [
      115858, 115857, 115856, 115855, 115862, 115861, 115860, 115859, 115863,
      115850, 115849, 115854, 115853, 115852, 115851, 115878,
    ],
  },
  { grade: "90681", blocks: [115866, 115938] },
  {
    grade: "90682",
    blocks: [115787, 115939, 115868, 115867, 115870, 115869],
  },
  {
    grade: "90683",
    blocks: [
      115927, 115931, 115864, 115821, 115820, 115819, 115822, 115829, 115828,
      115830,
    ],
  },
  { grade: "90684", blocks: [115940, 115805, 115808, 115807] },
  {
    grade: "90685",
    blocks: [115871, 115870, 115869, 115877, 115876, 115939, 115781],
  },
  {
    grade: "90687",
    blocks: [115781, 115877, 115876, 115869, 115870, 115939],
  },
  {
    grade: "90688",
    blocks: [115868, 115867, 115804, 115787, 115880, 115879, 115886],
  },
  {
    grade: "90689",
    blocks: [115787, 115804, 115886, 115868, 115879, 115867],
  },
  {
    grade: "90690",
    blocks: [115875, 115874, 115872, 115780, 115779],
  },
  { grade: "90691", blocks: [115875, 115874] },
  {
    grade: "90692",
    blocks: [115885, 115884, 115882, 115881, 115794],
  },
  { grade: "90693", blocks: [115885, 115884] },
  { grade: "90694", blocks: [115873, 115806, 115778] },
  { grade: "90695", blocks: [115873] },
  { grade: "90696", blocks: [115883, 115796, 115795] },
  { grade: "90697", blocks: [115883] },
  {
    grade: "90698",
    blocks: [
      115800, 115799, 115798, 115797, 115900, 115899, 115902, 115901, 115801,
    ],
  },
  {
    grade: "90699",
    blocks: [
      115797, 115801, 115800, 115799, 115798, 115901, 115900, 115899, 115902,
    ],
  },
  { grade: "90700", blocks: [115898, 115897, 115896, 115895] },
  { grade: "90701", blocks: [115898, 115897, 115896, 115895] },
  {
    grade: "90702",
    blocks: [
      115888, 115887, 115892, 115891, 115890, 115889, 115894, 115893, 115802,
    ],
  },
  {
    grade: "90703",
    blocks: [
      115889, 115888, 115887, 115802, 115893, 115892, 115891, 115890, 115894,
    ],
  },
  {
    grade: "90704",
    blocks: [
      115911, 115906, 115905, 115904, 115903, 115910, 115909, 115908, 115907,
    ],
  },
  {
    grade: "90705",
    blocks: [
      115903, 115907, 115906, 115905, 115904, 115911, 115910, 115909, 115908,
    ],
  },
  {
    grade: "90706",
    blocks: [115908, 115907, 115906, 115905, 115911, 115910, 115909, 115903],
  },
  {
    grade: "90707",
    blocks: [
      115917, 115921, 115920, 115919, 115918, 115925, 115924, 115923, 115922,
    ],
  },
  {
    grade: "90708",
    blocks: [
      115918, 115917, 115922, 115921, 115920, 115919, 115925, 115924, 115923,
    ],
  },
  {
    grade: "90709",
    blocks: [115923, 115922, 115921, 115920, 115924, 115919, 115918, 115917],
  },
  {
    grade: "90710",
    blocks: [115912, 115916, 115915, 115914, 115913, 115803],
  },
  {
    grade: "90711",
    blocks: [115916, 115915, 115914, 115913, 115912, 115803],
  },
  {
    grade: "90712",
    blocks: [115803, 115914, 115913, 115912, 115916, 115915],
  },
  {
    grade: "90713",
    blocks: [
      115811, 115810, 115809, 115927, 115926, 115931, 115930, 115929, 115928,
      115815, 115814, 115813, 115812, 115819, 115818, 115817, 115816, 115864,
    ],
  },
  {
    grade: "90714",
    blocks: [
      115820, 115824, 115823, 115822, 115821, 115828, 115827, 115826, 115825,
      115830, 115829, 115932,
    ],
  },
  {
    grade: "90715",
    blocks: [
      115841, 115840, 115845, 115844, 115843, 115842, 115848, 115847, 115846,
      115831, 115835, 115834,
    ],
  },
  {
    grade: "90716",
    blocks: [
      115833, 115832, 115838, 115837, 115836, 115839, 115934, 115933, 115937,
      115936, 115935,
    ],
  },
  {
    grade: "90717",
    blocks: [
      115935, 115934, 115933, 115937, 115936, 115833, 115832, 115839, 115838,
      115837, 115836,
    ],
  },
  { grade: "90718", blocks: [115812] },
  {
    grade: "90719",
    blocks: [
      115845, 115844, 115843, 115842, 115848, 115847, 115846, 115831, 115835,
      115834, 115841, 115840,
    ],
  },
  {
    grade: "90720",
    blocks: [
      115833, 115832, 115838, 115837, 115836, 115934, 115933, 115937, 115936,
      115935,
    ],
  },
  { grade: "90721", blocks: [115782, 115786, 115938, 115866] },
  { grade: "90722", blocks: [115905] },
  { grade: "93337", blocks: [115825] },
  { grade: "93838", blocks: [115827, 115826, 115932] },
];

//global variable for the iterator
cnt = 0;

const cheatIterator = () => {
  for (let i = cnt; i < tableArray.length; i++) {
    const remainCnt = parseInt(
      document.querySelector(
        `#seat_grade_${tableArray[i].grade} > a > div > span.seat.ng-scope > span:nth-child(1)`
      )?.textContent
    );
    if (remainCnt >= 1) {
      document.querySelector(`#seat_grade_${tableArray[i].grade} > a`).click();
      console.log(tableArray[i].grade, "grade clicked");
      const blocksInside = tableArray[i].blocks;
      let isClicked = false;
      for (let block of blocksInside) {
        let blockNode = document.querySelector(`#seat_zone_${block} > a`);
        let remain = parseInt(
          document.querySelector(
            `#seat_zone_${block} > a > div > span.seat.ng-scope > span:nth-child(1)`
          )?.textContent
        );
        console.log(block, remain);
        if (remain >= 1) {
          console.log(block, "block clicked");
          blockNode.click();
          isClicked = true;
          cnt += 1;
          break;
        }
      }
      if (isClicked) break;
    }
  }
};

//Next btn
const next = document.querySelector(
  "#container > div.reserve_content > div.reserve_right.ng-isolate-scope > div.reserve_btn.ng-scope > a"
);

//Refresh block on press ‘4’
document.addEventListener("keydown", (e) => {
  if (e.key == "4") {
    e.preventDefault();
    console.log("refresh blocks-");
    cnt = 0;
    //Refresh canvas
    document.querySelector("#btn_refresh").click();
    console.log("cheat!");
    cheatIterator();
  }
  //Navigate on press ‘5’
  else if (e.key == "5") {
    e.preventDefault();
    console.log("navigate!");
    next.click();
  }
  //see next vacancies
  else if (e.key == "6") {
    e.preventDefault();
    console.log("see next vacancies");
    cheatIterator();
  }
  console.log('cnt:', cnt);
});
