const api = document.querySelector('#api-ul');

async function fetchApi() {
    const response = await fetch('https://api.github.com/users/kocserhatt');
    const data = await response.json();
    return [data];
}

async function getApi() {
    const data = await fetchApi();
    for (const apiEkle of data) {
        api.innerHTML += `
            <div class="userInfo">
                <h2 class="titleTwo">GİTHUB ÖĞRENCİ KARTI</h2>
                <div class="avatar-container">z
                    <img src="${apiEkle.avatar_url}" alt="User Avatar" class="image">
                    <div class="overlay"></div>
                </div>
                <div class="userDetails">
                    <p>Kullanıcı Adı: ${apiEkle.login}</p>
                    <p>İsim Soyisim: ${apiEkle.name}</p>
                    <p>Şirket: ${apiEkle.company}</p>
                    <p>Lokasyon: ${apiEkle.location}</p>
                    <p>Takipçi Sayısı: ${apiEkle.following}</p>
                    <p>Takip Edilen: ${apiEkle.followers}</p>
                    <p>Public Repo Sayısı: ${apiEkle.public_repos}</p>
                    <p>Public Gists Sayısı: ${apiEkle.public_gists}</p>
                    <a href="${apiEkle.html_url}">${apiEkle.html_url}</a>
                </div>
                <div class="bio">
                    <h3>BİO</h3>
                    <p>${apiEkle.bio}</p>
                </div>
            </div>
        `;
    }
}
getApi();
