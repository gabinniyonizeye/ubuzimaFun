import { App } from '$/components/app';
import '$/styles/index.css';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = String(<App />);
