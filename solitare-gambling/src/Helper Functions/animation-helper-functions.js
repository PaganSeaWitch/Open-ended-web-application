export function fadeOutAndSwitchPages(api, changePage, page){
    api.start({ to: async(next, cancel)=> {
        await next({ opacity: 0 }) 
        await next(()=>{ changePage(page); return{opacity:0}})
    }, from: { opacity: 1 }});
}