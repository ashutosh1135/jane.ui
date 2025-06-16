import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Send, User, Bot, Settings, Moon, Sun, Globe, Lock } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [messageType, setMessageType] = useState<'public' | 'private'>('public');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `I received your ${messageType} message: "${inputMessage}". This is a demo response!`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <SidebarInset className="flex flex-col glass-effect">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-stone-200/50 dark:border-gray-800/50 gradient-border backdrop-blur-md">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="hover:bg-stone-100/60 dark:hover:bg-gray-800/60 transition-colors" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-amber-800 to-orange-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Chat Application
          </h1>
          <Badge 
            variant={messageType === 'public' ? 'default' : 'secondary'} 
            className="ml-2 gradient-border bg-stone-100/50 dark:bg-gray-800/50"
          >
            {messageType === 'public' ? (
              <>
                <Globe className="w-3 h-3 mr-1" />
                Public
              </>
            ) : (
              <>
                <Lock className="w-3 h-3 mr-1" />
                Private
              </>
            )}
          </Badge>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="gradient-border hover:bg-stone-100/60 dark:hover:bg-gray-800/60 transition-all">
              <Settings className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 glass-effect border-stone-200/50 dark:border-gray-700/50">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              Theme
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setTheme('light')} className="hover:bg-white/10">
              <Sun className="w-4 h-4 mr-2" />
              Light
              {theme === 'light' && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')} className="hover:bg-white/10">
              <Moon className="w-4 h-4 mr-2" />
              Dark
              {theme === 'dark' && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              Message Type
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setMessageType('public')} className="hover:bg-white/10">
              <Globe className="w-4 h-4 mr-2" />
              Public
              {messageType === 'public' && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMessageType('private')} className="hover:bg-white/10">
              <Lock className="w-4 h-4 mr-2" />
              Private
              {messageType === 'private' && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`p-2 rounded-full ${
                message.sender === 'user' 
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 dark:from-gray-600 dark:to-gray-700' 
                  : 'bg-gradient-to-r from-stone-600 to-amber-700 dark:from-black dark:to-gray-800'
              }`}>
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl gradient-border backdrop-blur-sm ${
                message.sender === 'user'
                  ? 'ml-auto bg-gradient-to-r from-amber-100/60 to-orange-100/40 dark:from-gray-800/80 dark:to-gray-900/60'
                  : 'bg-stone-50/60 dark:bg-black/60'
              }`}>
                <p className="text-sm text-foreground">{message.text}</p>
                <span className="text-xs opacity-70 text-muted-foreground">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-stone-200/50 dark:border-gray-800/50 gradient-border backdrop-blur-md">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Type your ${messageType} message...`}
            className="flex-1 gradient-border bg-stone-50/40 dark:bg-black/40 placeholder:text-muted-foreground/60 focus:bg-stone-100/60 dark:focus:bg-gray-900/60 transition-all"
          />
          <Button 
            onClick={sendMessage} 
            disabled={!inputMessage.trim()}
            size="icon"
            className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-gray-700 dark:to-gray-800 hover:from-amber-700 hover:to-orange-700 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </SidebarInset>
  );
}
