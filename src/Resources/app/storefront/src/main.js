import ButtonProcessMessage from "./script/ButtonProcessMessage";

const PluginManager = window.PluginManager;

PluginManager.register(
	"ButtonProcessMessage",
	ButtonProcessMessage,
	".btn-buy",
	{}
);
