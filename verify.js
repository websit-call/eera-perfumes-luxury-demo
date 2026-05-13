const https = require('https');

const ids = [
  '1590736969955-71cc94801759', 
  '1615160492817-640a439281ad',
  '1594035910387-fea47794261f',
  '1588405027581-229f3458efbf',
  '1587444158428-1b6e4b85c138',
  '1592945403244-b3fbafd7f539',
  '1522337660859-02fbefca4702',
  '1583445013765-46c20c4a6772',
  '1532187863486-abf9dbad1b69',
  '1608532454558-868772bf2fcb',
  '1572017260028-e4d0dcbadddb',
  '1588405786737-013149da3929'
];

async function check() {
  for (const id of ids) {
    const url = `https://images.unsplash.com/photo-${id}?w=10`;
    https.get(url, (res) => {
      console.log(id, res.statusCode);
    });
  }
}

check();
