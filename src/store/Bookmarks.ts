
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { IBookmark } from '@/types/interfaces';

interface IUpdatePayload{
  bookmark:IBookmark,
  index:number
}
@Module({ namespaced: true })
export default class Bookmarks extends VuexModule {
  bookmarks:IBookmark[]=[
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/',
    },
    {

      name: 'Сбербанк',
      url: 'https://www.sberbank.ru/',
    },
    {
      name: 'Github',
      url: 'https://github.com/',
    },
    {
      name: 'jsfiddle',
      url: 'https://jsfiddle.net/',
    },
    {
      name: 'Хабр',
      url: 'https://habr.com/',
    },
  ]

    @Mutation
  createBookmark(newBookmarks:IBookmark):void{
    this.bookmarks.unshift(newBookmarks);
  }

    @Mutation
    removeBookmark(index:number):void{
      this.bookmarks.splice(index, 1);
    }

    @Mutation
    updateBookmark(payload:IUpdatePayload):void{
      this.bookmarks[payload.index] = payload.bookmark;
    }
}