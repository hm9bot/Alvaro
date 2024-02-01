let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`

Ai ashbi

*.bimg*
*.bardai*
*.aivoice*
*.bingcreate*
*.chawnyma*
*.ai*
*.ai2*
*.dalle2*
*.art*
*.resvimg*
*.chatgbt*
*.drawing*
*.bard*
*.bard2*
*.wordle*
*.zombie*
*.nobg*
*.mic*
*.gemini*

download

*.apk*
*.apk2*
*.apkmirror*
*.ytv*
*.yts*
*.ytmp4*
*.ytvideo*
*.ytdoc*
*.storyset*
*.spotifysearch*
*.spotify3*
*.play2*
*.play3*
*.pinterest*
*.mediafire2*
*.manga*
*.gateanime*
*.bookslib*



‎‎‎barcha hajat

*.toanime*
*.translate*
*.wasted*
*.topdf*
*.textpdf*
*.tomp3*
*.tweet*
*.tts*
*.sticker*
*.wm*‎‎
*.attp*
*.quotlyv2*
*.quotlyv3*
*.quotly*
*.naruto*
*.logo1*
*.lg3*
*.lg4*
*.lg5*
*.get*
*.hd*
*.dehaze*
*.recolor*
*.qr*
*.jadibot*
*.tourl*
*.ocr*
*.imgonline*
*.channel*


🛡️‎‎owner

*.tagall*
*.setpp*
*.owner*
*.hidetag*
*.cleartmp*
 
 ♥
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 info sc owner :
 ------------------
  ⌬ | *𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼*:\ninstagram.com/212.mks
  ----------------------------- 
`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/bba27bc6b305ac6a5229d.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu'] 
export default handler
