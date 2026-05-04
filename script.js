const buildings = [
{code: "74291", owner: "BaeGunMin", x:138, y:0, z:200},
{code: "58326", owner: "BaeGunMin,wjy131104", x:133, y:0, z:115}
];

function searchBuilding() {
const input = document.getElementById("search").value;
const resultDiv = document.getElementById("result");

const found = buildings.find(b =>
b.code === input ||
`${b.x},${b.y},${b.z}` === input
);

if (found) {
resultDiv.innerHTML = `       소유자: ${found.owner}<br>
      좌표: ${found.x}, ${found.y}, ${found.z}<br>
      코드: ${found.code}
    `;
} else {
resultDiv.innerHTML = "❌ 찾을 수 없음";
}
}
