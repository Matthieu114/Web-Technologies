import { useTheme } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  header: {
    height: "60px",
    backgroundColor: "rgba(255,255,255,.3)",
    flexShrink: 0
  },
  headerLogIn: {
    backgroundColor: "red"
  },
  headerLogOut: {
    backgroundColor: "blue"
  }
})