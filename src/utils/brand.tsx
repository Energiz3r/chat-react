let style = `text-shadow: 1px 1px 3px black, 2px 2px 2px black, 0 0 4px red, 2px 2px 4px red, -2px -2px 4px red; 
color: red; font-weight: 900;  background-image: linear-gradient(to right, black , rgb(108, 108, 108));`;
const brand = String.raw`%c
                                                                             
    __________ .__                                   .__               __     
    \______   \|  |  _____   ________  ____    ____  |  |__  _____   _/  |_   
     |    |  _/|  |  \__  \  \___   /_/ <> \ _/ ___\ |  |  \ \__  \  \   __\  
     |    |   \|  |__ / <> \_ /  __/ \  ___/ \  \___ |   \  \ / <> \_ |  |    
     |______  /|____/(____  //_____ \ \___  \ \___  ||___|__/(______/ |__|    
            \/            \/       \/     \/      \/   (C) BlazeChat 2018     
                                                                             
`;
export const consoleBranding = () => console.log(brand, style);
