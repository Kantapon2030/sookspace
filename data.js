// --- ข้อมูลข่าวสาร (News Database) ---
const newsData = [
    { 
        id: 'n1', 
        title: "📸 พิธีมอบเกียรติบัตรกิจกรรม", 
        date: "30 ต.ค. 68", 
        images: [
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/572835367_122121745232989185_4487587378514604135_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE29uprQgILMrqs9nfjFnlej479WYqS60mPjv1ZipLrSUc8TRBB6ORiCB1Q17-KI-ty0ZXu2Xot1pXFPhvcPPWs&_nc_ohc=1N0yeddARigQ7kNvwEBlTsz&_nc_oc=AdlTMO-mPepv-TK4cFYl_6e1aAyi0uSo8mqVnT41gSsxbk3lnwvmDoQHEYZo1yERljkUJmLkbE26BGw6CdYzpIfe&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=6sQrANSUnZZYOBMz-49CnA&oh=00_AflJDbLujYJTlyazQjjvns-pJNavauZGzauUwmfU8A20Bw&oe=6959D5C7",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/572807962_122121745154989185_8965360640956108195_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeESReRBciEP1t6nBsCO6vR9D6GuBeIe3QYPoa4F4h7dBgGTWc6_l-kCOzIhWgFqbOMTRUpsQDSdpr7f4YnWF63H&_nc_ohc=KKfLjk90DTAQ7kNvwGt68Bp&_nc_oc=AdmRD6-tpp1dZFp2grehHxM96bLlwjD1Vh-Qo8hi_l6dAVGqPQxCVJZPvsk2SscoioDAtthYrj9xZaZXrYo-NeCh&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=IFZW7tq4Ij6332JzuWcBuQ&oh=00_Afl9LGgskMV0tP26voVHooHtGJG7ieFy6xWKicmzDh2C0w&oe=6959DC1F",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/571795474_122121745256989185_8436475784067757809_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFaPaP23-lATpnINQgBvbJKhPpIMVXgLjqE-kgxVeAuOqnhY4R99D7uJX9CUExsjF5bZ4u_qVfxc2TQqixypN_3&_nc_ohc=pnqQgc5KXboQ7kNvwFvmkHo&_nc_oc=AdnZK0zEvhjYtYvtJYC0kvOuJUxSvgYbkGMrNyagD-WZ8GkOIfHk2inYN5v5OdBHXpT-uXLgNvxxRmOqV6sjNiPF&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=zvs6cu5tpwVxPbgIZMp0zQ&oh=00_AfnThli2lgQEbnDKTdnhpj0aPAdwcrBHuL7wRoNXj-2cGQ&oe=6959C043",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/572010404_122121745136989185_768798930405308507_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFJplta1yKTkKg7sB-q03XQmIY1xwQe00eYhjXHBB7TR9rKVaU7IulAGAn41-4s6ZyRLTBMa7B19007YoiBytfC&_nc_ohc=4z9_ZTqSLSkQ7kNvwG1Tx6a&_nc_oc=Adl6lAcdjW20V9rLk2rpQ89fUNpdAX9NpCL5_gcEfh_Kt1u2kH_9iEEYi_yRgdJR_S9PAHU-y79ZD9lMIfSkonaD&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=zYRKMEUPF7Jij1cqQuQe7A&oh=00_AflCc5Tr--h5xxcNz75uRVVPqI1Q57HTaUDXusvdk3w4mQ&oe=6959F255",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/572982996_122121745070989185_3274386685142180972_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFl_zUmQd--nL2KFfS-7Fy4R51pa5IYG-hHnWlrkhgb6PARuRqoGUjzGh60PxRjwdBBd4RsUDpstCTR1snQW3DZ&_nc_ohc=DOsntrZtzT8Q7kNvwFYj6NY&_nc_oc=AdksXmfr7qXibGerS1GmeSwir2P_pqjoLjI8pzZPIi7zN1I49YFyy2kRsTAl8TYPMC0D3C3_x99oWWYJd1mYP2XY&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=uo8zlLERVyZ4fffsz6YSTg&oh=00_Afk3jfIOokFoQ974ESxexmaco7Upk4N3oolNV1zUzVkexA&oe=6959F24E",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/573993532_122121745196989185_1739016161669464978_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHrOpj7Zveq8Uah78efiU3U8UjhKl0FadTxSOEqXQVp9yoDUkU4g1FLBLVUIdED1-SetC_30RGd6nX_sQ6n0MW&_nc_ohc=N0TvQhmSZZUQ7kNvwF06lbw&_nc_oc=Adk4u74i3BGBkB8olCRlmnEp_RHjkTiT6etMu70Hh_Pe3qy8eldqVRzuPVh5z-gATbFSH1pQb7YGtcJs7JtDo2Fx&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=rZT8PO8sHXgWIv1OrxPxyA&oh=00_AfmDRBeAvTtgS4TxO6jicIEB2c40OhOTm-45JxdJzp11xg&oe=6959E21C",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/573288416_122121745028989185_4545515245324056678_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEu15iUEXtldU2A3YGsyAydHDPg3ZPt7HEcM-Ddk-3scTs1t_XsSj4BeOX7QD19eS3fNvYA7K-mGi-rYaKoGce-&_nc_ohc=32DHmSbfsgoQ7kNvwHfa2Eo&_nc_oc=Adk6r1sOt4GkAfJERPlL4n4N8jwiJAlxfEAcWy8_CIJBszVszCJTKJKJvtkB0p2S-i-XwNT8ocBSz1M9lvJ1lGZJ&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=WTyS2qZD55nXA7KXqCWclg&oh=00_Aflq7m8D6QdM7S2EAScGxAXgtE7912wmLmoAanMs6VhP2g&oe=6959C7A5",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/573095638_122121745130989185_2413429571868746866_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGD_Fbi0PrxeXnH873-HXVvJ-b_1aUEJX0n5v_VpQQlfQ5zOv7yjap5Oh3UFL9eemy-4hJFtdOgQD8wp9BAsvV4&_nc_ohc=JTOg-YD4QEwQ7kNvwHOllMH&_nc_oc=AdmxqtUNciCu3jLecfW6g285Dc3WnG1yP1uCYZsvJfrptNqBHMUMjxwirlzYnUaMNbmECC8uMLhB1Ol-2iGyywZg&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=JYJhTD_vu78jGcvoCdT8iA&oh=00_Afl3pPVMQzMbiemkQrUtuvtsUAvTqiW5ceBa2J7k24kXkg&oe=6959BB07"
        ], 
        summary: "🎉 ขอแสดงความยินดีกับนักเรียนทุกคน ที่ได้รับเกียรติบัตรจากกิจกรรมการประกวด Infographic ภายใต้แคมเปญ “โตไปไม่สูบ” หัวข้อ “Stay Lit, Don’t Smoke” 🚭💜 ขอขอบคุณ นางสาวโสภา ไสวศรี ผู้อำนวยการโรงเรียนเตรียมอุดมศึกษาภาคใต้ ที่ให้เกียรติมอบเกียรติบัตรแก่ผู้ได้รับรางวัลในครั้งนี้ครับ" 
    }
];

// --- ข้อมูลกิจกรรม (Activities Database) ---
// readMoreLink: ลิ้งค์สำหรับปุ่ม "อ่านรายละเอียดเพิ่มเติม" (เช่น ไฟล์ PDF ระเบียบการ)
// registerLink: ลิ้งค์สำหรับปุ่ม "สมัครเข้าร่วมกิจกรรม" (เช่น Google Forms)
// buttonText: ข้อความบนปุ่มสมัคร (Optional)
const activityData = [
    { 
        id: 'a2', 
        type: 'ongoing',     // ประเภทใหม่: กิจกรรมกำลังจัด (มีปุ่มเดียว)
        status: 'active',
        title: "LIVE! งานเสวนาออนไลน์: วัยรุ่นกับบุหรี่ไฟฟ้า", 
        images: [
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
        ], 
        description: "ขอเชิญรับชมการถ่ายทอดสดงานเสวนาออนไลน์ ในหัวข้อที่น่าสนใจเกี่ยวกับภัยเงียบของบุหรี่ไฟฟ้า ร่วมพูดคุยกับวิทยากรผู้เชี่ยวชาญและแกนนำเยาวชน \n\nคลิกปุ่มด้านล่างเพื่อเข้าร่วมรับชมผ่าน Zoom หรือ Facebook Live ได้เลย!", 
        link: "https://zoom.us/join-meeting-link", // ลิ้งค์เข้าร่วม
        buttonText: "เข้าร่วมกิจกรรม (Live)",
        summary: "รับชมถ่ายทอดสดงานเสวนาออนไลน์ ร่วมพูดคุยกับวิทยากรผู้เชี่ยวชาญ" 
    },
    { 
        id: 'a1',
        type: 'recruitment',
        status: 'closed',    // ตัวอย่าง: ปิดรับสมัครแล้ว
        title: "ประกวดคลิปวิดีโอสั้น 🎬✨ “ควันบุหรี่ใกล้ตัว”", 
        images: [
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/597780938_122129314256989185_910267211947412515_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEnDsS8O-FBC4SaYzfeHMpWrpDz65YDNOWukPPrlgM05cxe8Yyy22aa7JJUmuTfGPiwmHO8ZszIjkwLxenpR2e-&_nc_ohc=hPkiwLCbF2cQ7kNvwF35Fx2&_nc_oc=AdkqQy4tiSbuaESHh4H89rVEEdXEtKl0WP2YVnNFKnmQT6ABOOeSWjFEXWaHI293yLdGHev3HnkQIPVjlGKvTH9f&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=M0_UiI2cnX7XxyJ1iyFBgg&oh=00_AfmDRjv84Kt6H-6Cup_UAKR9XTzIy4SB5rR-ag3P-SC0wQ&oe=6956F424",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/595086020_122128703396989185_1624478109816185511_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_k0waDQlykPigB4W2HxmHxBOflbAzMg_EE5-VsDMyDxEwefuayvi0DtpV0HFS3IsuAwB6ihrJob7GI0RCK_aY&_nc_ohc=WUA6H7nIl-wQ7kNvwG8LzqJ&_nc_oc=AdnnVVuADC9OvujUlu6Fqnp5JcCpIiuiuAXb2KAskRcatERjdIwKkoOjIn2sen6H3wCIzcpdg-0tueSd3NQaqjF8&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=BtDev5fkbDvovE6uHGXMYA&oh=00_AfkCoXJmMYN1LT8AtB6UQamrr-TfGdzdLi2JRfuP9QxulA&oe=6959B962",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/594540960_122128703450989185_7612981009882483941_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFECmeCo6a3m7vyavJZ1n3Pt_2noZ0ThCO3_aehnROEI1MIuUizYld3joABR6RKA28WNBB9q4NL-bPLwHICDHVW&_nc_ohc=7KBQmWMXx4QQ7kNvwGGNVtx&_nc_oc=AdkK_k3YzQhcJI1PMwnp9hQ-LlNSCxy9zP4RwEL4SiI5XTXrqYcI7_gr6VaVa9W99wIIuFCgRhel7scFovjzj2UX&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=RBTr3wnFKbnYjno6uUXrYg&oh=00_AfnxXWKfRK_3ZP_2FGuelBo2fS7dq6q39Mu6BOpDY7Peyw&oe=6959AFE5",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/594529067_122128703426989185_2361803656526942580_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFlz-p1Z9EbRASAwXvyDZyKVi3h0yfciYFWLeHTJ9yJgQgLpeS-SsvAqamXTmUR3rAVMCCmxv_kBP9kOR2G84rb&_nc_ohc=Dkyx0xZqv2sQ7kNvwEwn6CL&_nc_oc=AdndPm-XZnHB-jEwtezovIjnmE4z65C-X71QVVy_Tx98cA9Gc3gPqT4xeRAJYjrLhx8qOVaIWZbOEST0kgb4S-gA&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=jbgbFLobu2qdmcMxQXBjLQ&oh=00_AfkFPLpI6f9dnDJCe2Fd0yMt9cGY2FY4MWNaHlTMl-iOvA&oe=6959CBD5",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/594983021_122128703438989185_8608316920529593267_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGVInp-AmtUeGBy0pkEUu_s3IrfAE1PcC_cit8ATU9wL8_iNn7XCz5xuC6GsLNXPnGu7SrGCTocHf9dgJyzr_jH&_nc_ohc=sPlu35BP5lUQ7kNvwGqN7qB&_nc_oc=AdmSSC5a_8D8Ey5L7gio7UYtvtg3Er0sq-XBjbUezqVX7Z0aOBI-PrqaE0RM1EpgS_86klTyg5LDIRWYIpMNYGUG&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=z8QDTj-_lW4UMG1ypfx36w&oh=00_Afml3Ql4Tufb4WCpiMtG3urE7ZeTkngWUuZYldzmHaxPjg&oe=6959D597"
        ], 
        applyDate: "6 ธ.ค.68 - 4 ม.ค.69", 
        description: "แกนนำโตไปไม่สูบ โรงเรียนเตรียมอุดมศึกษาภาคใต้ ร่วมกับศูนย์สร้างสรรค์สื่อเพื่อเด็กเยาวชนและครอบครัว และสำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.)\n ชวนชาว ม.ปลาย รร.เตรียมอุดมศึกษาภาคใต้ มาร่วมเล่าเรื่องผ่านคลิปวิดีโอความยาวไม่เกิน 3 นาที \nในหัวข้อ 🔥 “ควันบุหรี่ใกล้ตัว” จะจริงจัง ตลก แง่คิด สร้างสรรค์ได้หมด! ", 
        criteria: "1. ระดับชั้น ม.4-6 โรงเรียนเตรียมอุดมศึกษาภาคใต้\n2. ทีมผู้สมัครจะต้องมีสมาชิกในทีม 4 คน", 
        // ลิ้งค์สำหรับปุ่ม 'อ่านรายละเอียดเพิ่มเติม'
        readMoreLink: "https://drive.google.com/file/d/1jwRUQRipz3hVgcxJlCGo24hAb8aiEJoK/view?usp=sharing", 
        // ลิ้งค์สำหรับปุ่ม 'สมัครเข้าร่วม'
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBUC0oP9BnbUg_H6YVu7y37Sup64p3764X6HyqDWsXaY9JEQ/viewform?pli=1&fbclid=IwY2xjawPA1ohleHRuA2FlbQIxMABicmlkETEyVnptNnZUMUNaZzY3WGZsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnibohf100MKkgpOwjOexcZFT_I7eSASWuiNDbWzTrz36Wl3oETt6zozzSW2_aem_fpkaMeLreKbvJJo-G98LKw", 
        buttonText: "สมัครเข้าร่วม",
        summary: "ชวนชาว ม.ปลาย เล่าเรื่องผ่านคลิปวิดี 3 นาที ในหัวข้อ 🔥“ควันบุหรี่ใกล้ตัว”" 
    },
    { 
        id: 'a3', 
        type: 'recruitment',
        status: 'closed',    // ตัวอย่าง: ปิดรับสมัครแล้ว
        title: "สร้างสรรค์ Infographic ”Stay Lit, Don‘t Smoke“ 🚫🚬", 
        images: [
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/560500532_122117244536989185_6055050141498744594_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEIhtyAEqjzDQhoX2qvUckBmzDP1tMz2iCbMM_W0zPaIOQwJ-3Y2hYAfCWAujKMFDwijWxr3_DYP4MmbpF2jDDu&_nc_ohc=MIHorE5XAEkQ7kNvwGkzxZ3&_nc_oc=AdlQvDKWRRm4RGf4qcXG-XZeeq__BL2rXlmQv2J0We0bPtYSBpfP8gSEqLRPTlrH1VODpes4DuD3osshVEx0xIdg&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=b1RPWBP3bxXCqipoXh28HA&oh=00_Afkmip08tAh3fKDcYzR1I_hKpv0wx4zqQMztnnctwGdEGQ&oe=6959E441",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/561739645_122117244584989185_5339656944943668675_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6-UY_06Tt1lSPr6bRPnVF51UieoarP2fnVSJ6hqs_ZzFibCrCetCd466IxuTYD9zo2CIZQMDZq-jSjbahm16c&_nc_ohc=2NPsvZJtRZYQ7kNvwGmpX3w&_nc_oc=AdlGlncS9vm-XmPr40XWsgWgr0yqp5DoT-yCAiU8HsSs_QHwPH557VJkvyiPBzrYGWUmz6J0v6O7w-TyRGTa0dja&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=9FPznDfU7zG3YONZRqBJ7A&oh=00_Afk9TrW9zJgv2_WvglUGA7QLCFdRUQPgdjRF9Oi-mUVkeA&oe=6959D308",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/558907541_122117244620989185_8509854083374649959_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaQpERI9JocRcGvxsVuTd3rWTYAXDedm2tZNgBcN52bdVH2Nm9UL7qix5OorhBHx-4FMo1OhnWQ7jIOCnG8OxG&_nc_ohc=Sw4AOkfCW14Q7kNvwGSHpCj&_nc_oc=Adl3EVeUKPSjuKIrcct7pxgSifMVwJq9xKrWizQgiDVRLnsBhwUp7ydhtNfua9dvrOj4492yCgfsTSHJcAeVhtKR&_nc_zt=23&_nc_ht=scontent.furt3-1.fna&_nc_gid=K07761pnolvWkaeov9xwaw&oh=00_Afkm8a1T5ub0abOL4k5lml8A1nEyJp7vwt_k9ii5st3d1Q&oe=6959E108"
        ], 
        applyDate: "10 - 20 ต.ค. 68", 
        description: "🚗💨💨มาแล้วจร้าาขอเชิญเพื่อนๆ พี่ๆ น้องๆที่มีใจรักในการออกแบบ โรงเรียนเตรียมอุดมศึกษาภาคใต้ ร่วมกับศูนย์สร้างสรรค์สื่อเพื่อเด็กเยาวชนและครอบครัว และสำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.) จัดกิจกรรมสร้างสรรค์ Infographic ภายใต้แคมเปญ โตไปไม่สูบ หัวข้อ ”Stay Lit, Don‘t Smoke“ 🚫🚬🚫 โดยแกนนำโตไปไม่สูบ สารวัตรนักเรียนไซเบอร์โรงเรียนเตรียมอุดมศึกษาภาคใต้", 
        criteria: "1. ระดับชั้น ม.4-6 โรงเรียนเตรียมอุดมศึกษาภาคใต้", 
        readMoreLink: "",
        registerLink: "",
        buttonText: "สมัครเข้าร่วม",
        summary: "🚗💨💨มาแล้วจร้าาขอเชิญเพื่อนๆ พี่ๆ น้องๆที่มีใจรักในการออกแบบ" 
    },

];