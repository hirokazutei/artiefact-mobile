type MapIconTypeKey = "user" | "text" | "image" | "audio" | "video";

type FeatherIconNameKey = "user" | "pen-tool" | "image" | "mic" | "video";

const mapIcontypes: Record<MapIconTypeKey, FeatherIconNameKey> = {
  user: "user",
  text: "pen-tool",
  image: "image",
  audio: "mic",
  video: "video",
};

type MapIconSizeKey = "small" | "medium" | "large";

const mapIconSizes: Record<MapIconSizeKey, number> = {
  small: 16,
  medium: 24,
  large: 32,
};

export { mapIcontypes, MapIconTypeKey, mapIconSizes, MapIconSizeKey };
