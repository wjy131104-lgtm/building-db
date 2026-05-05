const buildings = [
  { code: "74291", owner: "BaeGunMin", x: 138, y: 0, z: 200 },
  { code: "58326", owner: "BaeGunMin,wjy131104", x: 133, y: 0, z: 115 },
  { code: "96504", owner: "BaeGunMin", x: 101, y: 0, z: 43 },
  { code: "31857", owner: "BaeGunMin", x: 69, y: 0, z: 37 },
  { code: "80462", owner: "BaeGunMin", x: 27, y: 0, z: -13 },
  { code: "55193", owner: "BaeGunMin,wjy131104", x: 7, y: 0, z: -29 },
  { code: "66718", owner: "wjy131104", x: -41, y: 0, z: -23 },
  { code: "19064", owner: "BaeGunMin,wjy131104", x: 47, y: 0, z: 72 },
  { code: "42785", owner: "DAHOON1004", x: -98, y: 0, z: -54 },
  { code: "90517", owner: "Mangos1133", x: 94, y: 0, z: -63 },
  { code: "23690", owner: "BaeGunMin", x: 14, y: 0, z: 66 },
  { code: "77142", owner: "BaeGunMin", x: 135, y: 0, z: 229 },
  { code: "86425", owner: "BaeGunMin", x: 13, y: 0, z: 42 }
];

function searchBuilding() {
  const input = document.getElementById("search").value.trim().replaceAll(" ", "");
  const resultDiv = document.getElementById("result");

  const found = buildings.find(b =>
    b.code === input ||
    `${b.x},${b.y},${b.z}` === input
  );

  if (found) {
    resultDiv.innerHTML = `
      ✅ 찾음<br>
      소유자: ${found.owner}<br>
      좌표: ${found.x}, ${found.y}, ${found.z}<br>
      코드: ${found.code}
    `;
  } else {
    resultDiv.innerHTML = "❌ 찾을 수 없음";
  }
}