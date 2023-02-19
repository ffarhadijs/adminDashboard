import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

export default function EmailsList({ emailsList }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ width: "100%" }}>
      {emailsList.map((email, index) => (
        <Link to={`${email.id}`} key={email.id}>
          <Stack
            flexDirection={"row"}
            justifyContent="start"
            alignItems={"center"}
            sx={{
              backgroundColor: colors.primary[600],
              padding: "10px 20px",
              columnGap: "15px",
              width: "100%",
            }}
          >
            <Avatar src={email.profile} alt={email.title} />
            <Box sx={{ width: "100%", maxWidth: "600px" }}>
              <Typography variant="subtitle1">{email.title}</Typography>
              <Typography
                variant="subtitle2"
                fontSize={"small"}
                color={colors.grey[400]}
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {email.type === "sent" ? 
                  <div
                    dangerouslySetInnerHTML={{ __html: email.description }}
                  />
                  :
                email.description
                }
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontSize="small"
              color={colors.grey[400]}
              sx={{ marginLeft: "auto" }}
            >
              {email.date}
            </Typography>
            {email.attachment && (
              <AttachFileIcon
                fontSize="small"
                sx={{ color: colors.grey[400] }}
              />
            )}
          </Stack>
          <Divider
            sx={{ display: index === emailsList.length - 1 ? "none" : "block" }}
          />
        </Link>
      ))}
    </Box>
  );
}
