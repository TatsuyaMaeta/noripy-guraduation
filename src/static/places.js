const places = [
    {
        title: "こだまさん",
        description: `のりピー卒業＆内定入社おめでとう～！
素晴らしいプロインターンぶりでもうG'sに欠かせない人材になってくれました。
これからはデジハリ全体で活躍してください！！楽しみにしてますー！
デジハリ選考用Youtube動画を納期ギリギリでお手伝いしたのがもう懐かしいｗ`,
        imageUrl: process.env.PUBLIC_URL + "/assets/kodama.png",
        time: 1500,
    },
    {
        title: "らんこさん",
        description: `初めての面接の時からニコニコしてとても感じが良くて一瞬で好きになったのですが、あれから1年半。めちゃくちゃ成長しましたね！！！正直全然別人！！
のりぴは自分で行動してこそ、自分も考えがまとまってすっきりしてくるし、持ち前のスピードと行動力が活きるので、まずは動く！動き続けながら考える、をこれからも意識するとスーパーな社会人になれるかと思います。
いつも元気と明るさをジーズ全体にくれてありがとう！！
めちゃくちゃ感謝しているし、これからもずっと、のりぴーの夢と冒険を応援してます！
今後も何かあればいつでも気軽に声掛けて下さい。わたしものりぴの爆速成長スピードに負けないように頑張ります！
卒業おめでとう🎊`,
        imageUrl: process.env.PUBLIC_URL + "/assets/ranko.png",
        time: 1500,
    },
    {
        title: "かのみさん",
        description: `のりぴー、大学＆G'sインターン卒業、おめでとう～！
思えばJOINした当初から「かのみさんのタスク巻き取ります！」って、様々な場面でたくさんたくさん助けてくれたこと、心から感謝しています。本当にありがとう！
いつも明るく素直で、よく気が付き、周りを笑顔にしてくれて、みんなに愛されているのりぴー。
そういう持ち前の魅力にプラスして、G'sで新たに身に着けた武器を磨くことで、これからもどんどん活躍していくんだろうなーと思うととても楽しみ！
今後もDHの一員としてご一緒できるのがとても嬉しいです。これからもよろしくね！
G'sに遊びに来たときには、チームCSにアドバイスをください！笑`,
        imageUrl: process.env.PUBLIC_URL + "/assets/kano.png",
        time: 1500,
    },
    {
        title: "おおほりさん",
        description: `1年半お疲れさまでした！分からないことだらけでスタートして、毎月成長されているのを肌で感じていました。
22期の運営面ではなかなか大変な役回りをさせてしまいすみません笑
周りが全員社会人の中で負けずにしっかり成果を出していたこと、すごく心強かったです。
社会人になってからもムードメーカーな雰囲気を持って、さらに飛躍を遂げられることを楽しみにしています！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/ohori.png",
        time: 1500,
    },
    {
        title: "うめちゃん",
        description: `のりピー卒業おめでとうございます！のりピーのフォローや明るさにはいつも助けられてばかりでした！
イベントの主催をやったり、試験の仕組みを整えたり、初っ端からチャレンジを続けてきたのりピーはすでに即戦力のスキルがあります！
フレッシュな笑顔はそのままに、G'sのみならず、デジハリでもその名をとどろかせてください！
たまにG'sにも覗きに来てくれると嬉しいな！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/ume.png",
        time: 1500,
    },
    {
        title: "ゆっきーさん",
        description: `のりぴー、インターン＆大学卒業おめでとう！
のりぴーの笑顔には不思議なパワーがあると思います。
色んな人を巻き込んでハッピーにしたり、誰かを癒したり。いいものを素直にいいと言えるところも、本当に素敵だと思う。
どうかのりぴーの良さをそのままに、そして幸せで美しい女性になってください。
またジーズでいつでも待ってます、大好き！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/fujii.jpg",
        time: 1500,
    },
    {
        title: "うえはーすさん",
        description: `G'sインターン卒業おめでとう！
すぐに実行して周りを一気に動かしちゃうところは、見習うものがあるくらいのりぴーのかっこいいところだと思います！
本当につよつよインターンでした！お疲れ様でした！そしてデジハリ入社おめでとう！これからもよろしくお願いします(^^)/
Ps）恋に焦がれるのりぴーに贈りたいヘレンケラーの言葉(笑)
"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart."`,
        imageUrl: process.env.PUBLIC_URL + "/assets/uehara.png",
        time: 1500,
    },
    {
        title: "さちおかさん",
        description: `のりぴー！大学卒業＆入社おめでとう！！
最初は女子大生Powerすごいなーーって思ってたけど、ただの若さじゃなくて心の底からハッピーを人に振りまくことができる人だなーと尊敬したことを思い出します。
行動までが迅速で、かつ素直。これは才能でありのりぴーの積み上げてきたものだと思います！素敵で私のお手本です。
統一試験なんて本当にゼロ１で作り上げたのりピーの発明・プロダクトだと思う！すごい！
これからもその前向きさとちょっぴり恋に悩みがちなキュートな部分をそのままに素敵レディーになってください！！福岡でまた飲もう！！！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/sachi.png",
        time: 1500,
    },
    {
        title: "かっしーさん",
        description: `のりぴサン、ご卒業まじおめでござんす！
「本当に大学生か!?!?」と何度も思わされましたぜ…surprisingな のりぴサン。
気遣いと行動力とタフネスを武器に、これから先もアゲめなバイブスで生きていってください！
短い期間でしたけど一緒に働けて本当に良かったです！
また一緒のチームで働けることを I wish from the bottom of my heartです！
「「「どんなときでも心にギャルを!!」」」
かっしーより`,
        imageUrl: process.env.PUBLIC_URL + "/assets/kashi.png",
        time: 1500,
    },
    {
        title: "まえたつさん",
        description: `のりぴー、大学卒業おめでとう！アンド、デジハリ内定おめでとう！！
のりぴーのおかげでCSチームがとっても雰囲気良くいろいろなことに挑戦できたと思ってます。
わたしよりも段違いでしっかりしていて仕事も迅速正確でとっても助かっていました。感謝しています。
どこに行ってものりぴーはそのままの姿で自身がやりたいことにトライしてください！絶対上手くいく！！
CSで困ったらこっそりのりぴーに連絡しようかな?笑
これからののりぴーの目覚ましい活躍を楽しみにしてるね！！
またフラッとジーズに遊びにきてね！改めて、おめでとう！！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/maeta.JPG",
        time: 1500,
    },
    {
        title: "TDさん",
        description: `のりぴー1年半お疲れさまでした。
のりぴーの陽気な性格から、私はいつも楽しい雰囲気を感じていました。
その明るい笑顔が必ずよい出会いを運んでくれると信じています。
新天地でものりぴーらしく活躍（色んな意味で）してください。
また会える日を楽しみにしています。`,
        imageUrl: process.env.PUBLIC_URL + "/assets/TD.png",
        time: 1500,
    },
    {
        title: "福島さん",
        description: ` ご卒業おめでとうございます。今後何かあったらすぐ〜、俺に言え〜`,
        imageUrl: process.env.PUBLIC_URL + "/assets/fukushima.png",
        time: 1500,
    },
    {
        title: "DEV22 廣田さん",
        description: ` ご卒業おめでとうございます。入学前から色々とお世話になり、感謝してもしきれないです。
昔偉い人が卒業はゴールであると同時に社会人のスタートであるって言ってました。
多分その通りだと思うので今後とも一緒に頑張っていきましょう！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/taira.jpg",
        time: 1500,
    },
    {
        title: "LAB12やまてつさん",
        description: ` 卒業おめでとうございます。 
いつもオールナイトではお世話になりました。新社会人ががんばってね。  
PS 配属先がジーズになるといいね。`,
        imageUrl: process.env.PUBLIC_URL + "/assets/yamamoto.jpg",
        time: 1500,
    },
    {
        title: "DEV22 大木さん",
        description: `大学卒業＆G's卒業おめでとうございます！
そして、数ヶ月後にはG'sに戻っているはず！！笑またG'sで会える日を楽しみにしています〜。
by 東京DEV22_大木千卓`,
        imageUrl: process.env.PUBLIC_URL + "/assets/oki.jpg",
        time: 1500,
    },
    {
        title: "DEV22 鹿田さん",
        description: `のりぴーさん！G'sご卒業おめでとうございます♡
いつも明るくてかわいいのりぴーさん、サポートたくさんありがとうございました！
めっちゃ緊張しながら授業のイントロとかしていたのがかわいかったですw
これからのご活躍記念しています！
　DEV22期　鹿田葵`,
        imageUrl: process.env.PUBLIC_URL + "/assets/aoi.png",
        time: 1500,
    },
    {
        title: "DEV22 武藤さん洞雞さん",
        description: `のりぴーさん！5ヶ月間ありがとうございました。
事務局へ連絡した時はいつも即レスですごく頼りになりました。
新天地でも、G’sに戻ってこられても、大活躍お祈りしております！
写真は奇しくも男2人でハート作ってるみたいになってしまいました。`,
        imageUrl: process.env.PUBLIC_URL + "/assets/muto-dokei.jpeg",
        time: 1500,
    },
    {
        title: "DEV22 金さん",
        description: `のりピーさん、G's卒業おめでとうございます！
DEV22期期間中ありがとうございました！z卒業後もデジハリで頑張ってください！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/kim.jpg",
        time: 1500,
    },
    {
        title: "DEV22 稲田さん",
        description: `大学卒業おめでとうございます〜！！
かわいいかわいいのりぴーがジーズでの癒しでした。
デジハリ入社後も、ジーズへの配属を願って…社会人一年目がんばってね！応援しています！！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/inada.png",
        time: 1500,
    },
    {
        title: "DEV22 熊倉さん",
        description: `卒業おめでとうございます。
いつも気持ちのいい笑顔でサポートありがとうございました！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/kumakura.jpg",
        time: 1500,
    },
    {
        title: "DEV22 仁さん",
        description: `副担任お疲れ様でした！大堀さんに代わりクラスをまとめていてすごいなと思っておりました！\n今度こそ鳥メロ行きましょう！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/jin.png",
        time: 1500,
    },
    {
        title: "DEV22 中山さん",
        description: `御卒業&御入社おめでとうございます！
コロナ禍ではありましたが時を忘れて楽しめる時間は持てましたでしょうか？？
紆余曲折な人生を歩んでいる私のようなものからはお伝えをできることが多くはないのですが、難問をいただきましたら頓智で切り抜けるのが使命ですので、そのような時には思い出していただけたらと思っております！
おめでとうございます！！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/nakayama.jpg",
        time: 1500,
    },
    {
        title: "DEV22 Girls",
        description: `【峯村】ご卒業おめでとうございます。 お身体に気を付けて、新社会人として充実した毎日を送って下さいね。より一層のご活躍をお祈りしています。
【會澤】のりぴーさん、インターンお疲れ様でした。 いつも可愛らしいのりぴーさんの存在は勉強の中の癒しでした！きっとG’sに配属されると思うので（笑）その時はまた宜しくお願いします！ 
【守屋】のりピーさんご卒業おめてとうございます！！いつもエラーに悩まされていますが、G’sでのりピーさんの笑顔に癒されています！ 
G’sでもデジハリでも今後たくさんの人がのりピーさんの笑顔に癒されるはず！(^0^) 
ますますのご活躍お祈りしております！`,
        imageUrl: process.env.PUBLIC_URL + "/assets/girls.jpg",
        time: 1500,
    },
];

export default places;
