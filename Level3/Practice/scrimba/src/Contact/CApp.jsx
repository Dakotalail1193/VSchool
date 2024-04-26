import React from 'react'
import Contact from './Contact-Componet/Contact'
import './CApp.css'

export default function App(){
  return (
    <div>
      <Contact 
        img="https://as2.ftcdn.net/v2/jpg/01/79/23/85/1000_F_179238505_rUlbOB5sfTd2zmn0wCArc2KlsZENAgVs.jpg"
        name="Mr. Wiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        />

        <Contact 
          img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EACwQAAICAQMCBQQBBQAAAAAAAAABAhEDBCExEkEFEyJRYTJxgZGxBhQjQlL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUBAJYSsCAadGxRgQAAAAAAAAAAAAAAAAAAAAAAACUGQABfHzzRQmLpgdrUHHZUc04q9jSMtu/wCCj57/AJAyZBeRUCASyAAAAAAACUACAq2b48K5asDFJvghprk7HJVSVHPldsDIAAAAAAAAlchADp06i36r/DLZVT+np+G9zDHJxaaLZJOTtgUkt+5VotVkxjuBSiVE3WHayOAMlFdyyhFtIkigKyglKkR0mjRCAo4hRLBbMC8IX3r5LuPT3v5Ji9uIt/YspQyXGdRl2Ayb2MJcmrtLdmMnuAZAAAAAAAAJRAAsjRW+EmZwe5044pbv+QGPDJ79L/RduEIu01LtaNHr5Y49OO7Srkrh0mt8Qy9Gl02XPlUepwwwcnXd7AY+Z6fkzvfbhlZpxk1JNNNpprdfBEeQNkiHsa4r5XYxy31NvuBBL4MrLJ37gSxVm+GOKbpyp/JObCoJpST+wGC9Pei3V82V6djN7AWmyjJZDAgAAAAAAAAAAWjydGKLnsjm7HTp3VcfkD1vDPCP7iGV1c4dMkvi6f8AJTPqNV4XrskcObJgzwbj1Y5uMq/HujLBrNRgydWF1Jbprk9CfiWn8TjiXiuiWTJD0xz4ZeXOvZ7UwPEnCWpzN7ylLeTfLZisdTqqo+vyvw/BoPK0mjyYYuNyyTfVJvsuOD5pJSzVF7OVpp3W90BEVUGcuTk9XyqjJVd9jz80KdVt7gYRg5SpfdnRghiUJdWPrk/p3ao30WCU8bnFLpi6fymRl0ssU/RlhXzKgMo4fMxSr60/Su5jJ5YPpl12uV7HtaPLpdIk3NZdQ+ZVUY/a92/k49XPHkbl6U32A4oPqdGeRVJovN1J8fgym7oCoAAAAAAAAAAAACUa4nT7mJpCr3v9Aetp+iUdum/lnbpenJk/ywSiv+mjycGRS9EZOTfY74YZ40pU27+npA9DxPOv7KUMUY3LbY8PwzSZtbqlpsMfW3Vs9FZJ+Y4ZrTp12o414hqPDNQuiEU4u0/cD25eDamM+nFjU65lds+e8VhPFqZY8kblFcvuehD+p9RGU59EHOW7uJw6nxCWuz9WTFc+rZRA7f6ehGWPPjntLZpNdjq1ujjmTl0+ni48nnwz+TkTjJQnw6Zo9R5kX1O67gZajQxxx/xzSXs3ZwThKC4b+x6D8xwfQk4/J5+aEova5J/r9gc06vZNfcqy877pL7GYAAAAAAAAAAAAABKJRUAden1M8TbhkcH7rc6sepnkpTyqL56qVnmJ12T+5fzJv/Z17AejkyOXqWRyo5dTlWVpzac1wYOfxRVuwI7m+nyvFLqjz7mBKfzQHdp21Prab77HZp88E21C++2SmeP1yX0yfzTNI5/lxfvYHqauTlByh53vSdnl5J479UZSl7ydEzzzpepS+ZIzlmm+a/CQFJST4VFCzt8/wQwIAAAAAAAAAAAAAAABKBAAkBAAAGABAAkgAAAAAAAAAAAAAAAAAAAAAAAlAgASyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"       
        />

        <Contact 
          img="https://media.istockphoto.com/id/468583653/photo/cat-portrait.jpg?s=612x612&w=0&k=20&c=-cMtH_bzO5nDy1sltTKbJ5JV_u1GXS7ki-CaD-ek0aA="
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"       
            
        />

        <Contact 
          img="https://www.shutterstock.com/image-photo/adorable-british-breed-cat-white-260nw-511721281.jpg"
          name="Pumpkin"
          phone="(0800) CAT-KING"
          email="pumpkin@scrimba.com"       
        />
    </div>
  )
}
// ADD THIS TO MAIN.JSX
//import App from '../src/Contact/CApp.jsx'