
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
import { MessageSquare, Plus, User } from "lucide-react";

const chatHistory = [
  { id: 1, title: "AI Assistant Help", lastMessage: "How can I help you today?", time: "2 min ago" },
  { id: 2, title: "Project Discussion", lastMessage: "Let's discuss the features", time: "1 hour ago" },
  { id: 3, title: "Code Review", lastMessage: "The implementation looks good", time: "Yesterday" },
  { id: 4, title: "Design Feedback", lastMessage: "I like the new layout", time: "2 days ago" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="w-4 h-4" />
          New Chat
        </Button>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton className="flex flex-col items-start gap-1 h-auto py-2">
                    <div className="flex items-center gap-2 w-full">
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <span className="font-medium truncate">{chat.title}</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-6">
                      {chat.lastMessage}
                    </div>
                    <div className="text-xs text-muted-foreground ml-6">
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
        <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">user@example.com</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
