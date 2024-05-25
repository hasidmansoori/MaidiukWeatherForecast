
import { NgModule } from '@angular/core';  
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel'; 
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria'; 
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist'; 
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps'; 
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TableModule } from 'primeng/table'; 
import { ConfirmDialogModule } from 'primeng/confirmdialog';
const modules = [
 ChipsModule, 
 TableModule, 
 AccordionModule,
 AutoCompleteModule,
 AvatarModule,
 BadgeModule,
 BreadcrumbModule,
 ButtonModule,
 CalendarModule,
 CarouselModule, 
 CheckboxModule,
 ChipsModule,
 ColorPickerModule,
 ContextMenuModule,
 DataViewModule,
 DialogModule,
 DividerModule,
 DropdownModule,
 FieldsetModule,
 FileUploadModule,
 GalleriaModule,
 InplaceModule,
 InputMaskModule,
 InputNumberModule,
 InputSwitchModule,
 InputTextareaModule,
 InputTextModule,
 KnobModule,
 ListboxModule,
 MegaMenuModule,
 MenuModule,
 MenubarModule,
 MessageModule,
 MessagesModule,
 MultiSelectModule,
 OrderListModule, 
 OverlayPanelModule,
 PaginatorModule,
 PanelMenuModule,
 PanelModule,
 PasswordModule,
 PickListModule,
 ProgressBarModule,
 RadioButtonModule,
 RatingModule,
 RippleModule,
 ScrollPanelModule,
 SelectButtonModule,
 SidebarModule,
 SkeletonModule,
 SliderModule,
 SpinnerModule,
 SplitButtonModule,
 StepsModule,
 TabMenuModule,
 TabViewModule,
 TerminalModule,
 TieredMenuModule,
 ToastModule,
 ToggleButtonModule,
 ToolbarModule,
 TooltipModule,
 TreeModule,
 TreeTableModule,
 TriStateCheckboxModule,
 ConfirmDialogModule, 
 ToastModule,
 
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: []
})
export class PrimeNgSharedModules { }
