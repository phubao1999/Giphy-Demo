export interface IGif {
  id: string;
  images: {
    downsized: {
      height: string;
      size: string;
      url: string;
      width: string;
    };
    downsized_large: {
      height: string;
      size: string;
      url: string;
      width: string;
    };
  };
  title: string;
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    description: string;
    display_name: string;
    instagram_url: string;
    is_verified: boolean;
    profile_url: string;
    username: string;
    website_url: string;
  };
  username: string;
  import_datetime: string;
}
