import { useTheme } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  channels: {
    minWidth: "200px"
  },
  channel: {
    height: "100%",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  }
})
const styles = useStyles(useTheme())