import { NavItem, Rank, PlayerStat } from '../types';

export const SERVER_RULES = {
  general: {
    title: '§1. POSTANOWIENIA OGÓLNE',
    rules: [
      'Nieznajomość regulaminu nie zwalnia użytkownika z obowiązku jego przestrzegania.',
      'Każdy grający użytkownik akceptuje niniejszy regulamin.',
      'Administracja zastrzega sobie prawo do zmiany postanowień regulaminu w każdej chwili, bez konieczności powiadamiania społeczności.',
      'Moderacja zastrzega sobie prawo do podejmowania decyzji pochopnych, według własnego uznania.',
      'Gracz jest odpowiedzialny za ochrone swojego loginu i hasła. Administracja nie ponosi odpowiedzialności za straty wynikające z nieautoryzowanego dostępu do konta.',
      'Każdy może odwołać się do blokady, poprzez tworzenie ticket\'u na serwerze discord F&F SMP albo Kubothes Community.',
      'Nakazuje się używania mózgu.',
    ]
  },
  gameplay: {
    title: '§2. ZASADY ROZGRYWKI',
    rules: [
      'Zabrania się wykorzystywania oraz utajniania błędów gry, jak i serwera',
      'Udostępnianie danych osobowych bez zgody właściciela jest surowo zabronione.',
      'Zabronione jest celowe przeszkadzanie graczom oraz administracji w rozgrywce.',
      'Zakazane jest obrażanie serwera oraz administracji.',
      'Zakazuje się reklamowania jakichkolwiek zewnętrznych serwerów Discord i Minecraft.',
      'Użytkownicy są zobowiązani do zachowania kultury osobistej oraz uprzejmości.',
      'Okazuj szacunek każdemu, bez względu na przekonani, czy wyznanie.',
    ]
  },
  smp: {
    title: '§3. ZASADY ROZGRYWKI NA TRYBIE F&F SMP',
    rules: [
      'Zabronione jest posiadanie oraz korzystanie z poniższych modyfikacji:',
      'A. cheatów i klientów z cheatami',
      'B. moda/launchera blazinpack',
      'C. minimapy pokazującej pozycje innych graczy(normalna minimapa jest dozwolona)',
      'D. elytra swapper',
      'E. texture pack\'a z x-ray\'em',
      'Zakazuje się używania auto-clicker\'a',
      'Zakazane jest tworzenie trapów, z których nie da się uciec.',
      'Gracz ma zakaz posiadania powyżej jednego konta.',
      'Zabronione jest griefowanie(ciągłe zabijanie danego gracza, niszczenie innym budowli, budowanie bezsensownych budowli)',
    ]
  },
  additional: {
    title: '§4. DODATKOWE INFORMACJE',
    rules: [
      'Konto zablokowane z powodu wykrycia nielegalnego oprogramowania nie podlega procedurze odblokowania.',
      'Wszystkie zakupy dokonywane poprzez donate\'y są ostateczne i nie podlegają zwrotom.',
      'Pełna lista zalecanych dodatków jest dostępna na kanale discord: MODY.',
    ]
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Strona Główna', href: '#home' },
  { label: 'Sklep', href: '#shop' },
  { label: 'Regulamin', href: '#rules' },
  { label: 'Discord', href: '#discord' },
  { label: 'Statystyki', href: '#stats' },
];

export const RANKS: Rank[] = [
  {
    id: 'wędkarz',
    name: 'WĘDKARZ',
    price: 8,
    permissions: ['/hat'],
    description: 'Rozpocznij swoją przygodę z podstawowymi przywilejami.',
    additionalPerks: ['Custom kit'],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 12,
    permissions: ['/repair'],
    description: 'Ulepszona rozgrywka z możliwością naprawy.',
    additionalPerks: ['Custom kit'],
  },
  {
    id: 'svip',
    name: 'SVIP',
    price: 18,
    permissions: ['/hat', '/ec', '/repair'],
    description: 'Dodatkowe korzyści dla zaangażowanych graczy.',
    additionalPerks: ['Custom kit'],
  },
  {
    id: 'gvip',
    name: 'GVIP',
    price: 25,
    permissions: ['/hat', '/ec', '/repair', '/repair all'],
    description: 'Najlepsze doświadczenie z gry.',
    additionalPerks: ['Custom kit', 'Case key included'],
    featured: true,
  },
];

export const SHOP_ITEMS = [
  {
    id: 'whitelist',
    name: 'WHITE LIST',
    price: 15,
    description: 'Dołącz do naszej ekskluzywnej whitelisty dla bezpieczniejszej rozgrywki.',
  },
  {
    id: 'case-key',
    name: 'CASE KEY',
    price: 8,
    description: 'Odblokuj specjalne przedmioty i przywileje w grze.',
  },
];

export const PLAYER_STATS: PlayerStat[] = [
  {
    username: 'DiamondMiner42',
    avatar: 'https://mc-heads.net/avatar/DiamondMiner42',
    score: 1250,
    rank: 'GVIP',
  },
  {
    username: 'CreeperSlayer',
    avatar: 'https://mc-heads.net/avatar/CreeperSlayer',
    score: 980,
    rank: 'SVIP',
  },
  {
    username: 'RedstoneWizard',
    avatar: 'https://mc-heads.net/avatar/RedstoneWizard',
    score: 850,
    rank: 'VIP',
  },
  {
    username: 'EmeraldHunter',
    avatar: 'https://mc-heads.net/avatar/EmeraldHunter',
    score: 720,
    rank: 'WĘDKARZ',
  },
  {
    username: 'NetherExplorer',
    avatar: 'https://mc-heads.net/avatar/NetherExplorer',
    score: 690,
    rank: 'VIP',
  },
];
