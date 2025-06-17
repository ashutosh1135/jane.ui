
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";

const chatHistory = [
  { id: 1, title: "AI Assistant Help", lastMessage: "How can I help you today?", time: "2 min ago" },
  { id: 2, title: "Project Discussion", lastMessage: "Let's discuss the features", time: "1 hour ago" },
  { id: 3, title: "Code Review", lastMessage: "The implementation looks good", time: "Yesterday" },
  { id: 4, title: "Design Feedback", lastMessage: "I like the new layout", time: "2 days ago" },
];

export function AppSidebar() {
  return (
    <Sidebar className="glass-effect border-r-0">
      <SidebarHeader className="p-4">
        <Button className="w-full justify-start gap-2 gradient-border hover:bg-slate-100/30 dark:hover:bg-white/10 transition-all duration-200 bg-gradient-to-r from-slate-100/60 to-indigo-100/40 dark:from-gray-800/60 dark:to-gray-900/40">
          <Plus className="w-4 h-4" />
          New Chat
        </Button>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground/70 font-medium">Recent Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton className="flex flex-col items-start gap-1 h-auto py-3 px-3 hover:bg-slate-100/20 dark:hover:bg-white/5 rounded-lg transition-all duration-200">
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-medium truncate text-foreground">{chat.title}</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-0 truncate w-full">
                      {chat.lastMessage}
                    </div>
                    <div className="text-xs text-muted-foreground/60 ml-0">
                      {chat.time}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 p-3 rounded-lg gradient-border">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">user@example.com</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
