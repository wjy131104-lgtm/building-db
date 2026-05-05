const SUPABASE_URL = "https://dinfvxpscdargizxkyqg.supabase.co";
const SUPABASE_KEY = "sb_publishable_gPbDX3pQoGWxNVqc9Z7Vgw_tTF9tAGZ";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function searchBuilding() {
  const input = document.getElementById("search").value.trim().replaceAll(" ", "");
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.innerHTML = "검색어를 입력하세요.";
    return;
  }

  let query = db.from("buildings").select("*");

  if (/^\d{5}$/.test(input)) {
    query = query.eq("code", Number(input));
  } else if (/^-?\d+,-?\d+,-?\d+$/.test(input)) {
    const [x, y, z] = input.split(",").map(Number);
    query = query.eq("x", x).eq("y", y).eq("z", z);
  } else {
    query = query.ilike("owner", `%${input}%`);
  }

  const { data, error } = await query;

  if (error) {
    resultDiv.innerHTML = "❌ DB 오류 발생";
    console.error(error);
    return;
  }

  if (!data || data.length === 0) {
    resultDiv.innerHTML = "❌ 찾을 수 없음";
    return;
  }

  resultDiv.innerHTML = data.map(found => `
    <div class="card">
      ✅ 찾음<br>
      👤 소유자: ${found.owner}<br>
      📍 좌표: ${found.x}, ${found.y}, ${found.z}<br>
      🔑 코드: ${found.code}<br>
      📅 등록일: ${new Date(found.created_at).toLocaleDateString("ko-KR")}<br><br>
      <a href="${found.img}" target="_blank">📷 이미지 보기</a>
    </div>
  `).join("");
}