import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// subset的作用是指定字体的字符集，latin表示拉丁字符集，包括英文、法文、德文、意大利文、西班牙文等。
// 要想预加载字体必须设置该属性，因为可以去除不需要的语言字符集，减少字体文件的大小。
export const lusitana = Lusitana({ weight: '700', subsets: ['latin'] });
