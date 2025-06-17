
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
    <Sidebar 
      className="glass-effect border-r-0" 
      style={{ background: 'linear-gradient(135deg, rgba(201, 251, 188, 0.3) 0%, rgba(201, 251, 188, 0.15) 50%, rgba(190, 240, 175, 0.2) 100%)' }}
    >
      <SidebarHeader className="p-4">
        <Button 
          className="w-full justify-start gap-2 hover:opacity-80 transition-all duration-200 border border-stone-200/30 dark:border-gray-700/50 backdrop-blur-sm text-stone-700 dark:text-gray-100"
          style={{ background: 'linear-gradient(135deg, rgba(201, 251, 188, 0.4) 0%, rgba(190, 240, 175, 0.3) 100%)' }}
        >
          <Plus className="w-4 h-4" />
          New Chat
        </Button>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-stone-700 dark:text-gray-300 font-medium">Recent Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton 
                    className="flex flex-col items-start gap-1 h-auto py-3 px-3 rounded-lg transition-all duration-200 border-0 hover:opacity-80"
                    style={{ 
                      ':hover': { 
                        background: 'linear-gradient(135deg, rgba(201, 251, 188, 0.2) 0%, rgba(190, 240, 175, 0.15) 100%)' 
                      } 
                    }}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-medium truncate text-stone-800 dark:text-gray-100">{chat.title}</span>
                    </div>
                    <div className="text-xs text-stone-600 dark:text-gray-400 ml-0 truncate w-full">
                      {chat.lastMessage}
                    </div>
                    <div className="text-xs text-stone-500 dark:text-gray-500 ml-0">
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
        <div 
          className="flex items-center gap-3 p-3 rounded-lg border border-stone-200/30 dark:border-gray-700/40 backdrop-blur-sm"
          style={{ background: 'linear-gradient(135deg, rgba(201, 251, 188, 0.25) 0%, rgba(190, 240, 175, 0.2) 100%)' }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-stone-400 to-slate-500 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-stone-800 dark:text-gray-100">user@example.com</p>
            <p className="text-xs text-stone-600 dark:text-gray-400">Online</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
