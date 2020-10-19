import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { MatButtonModule, MatSidenavModule , MatListModule, MatDividerModule} from '@angular/material';
import { MatBadgeModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { RegisterClientComponent } from './views/register-client/register-client.component';
import { FreelancerComponent } from './views/freelancer/freelancer.component';
import { ClientComponent } from './views/client/client.component';
import {MatTreeModule} from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { GuestNavComponent } from './views/guest-nav/guest-nav.component';
import { PostJobComponent } from './views/client/post-job/post-job.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { JobsComponent } from './views/jobs/jobs.component';
import { OrderMessageComponent } from './views/jobs/order-message/order-message.component';
import { OrderBiddingComponent } from './views/jobs/order-bidding/order-bidding.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientNavComponent } from './views/client/client-nav/client-nav.component';
import { FreelancerNavComponent } from './views/freelancer/freelancer-nav/freelancer-nav.component';
import { MatTableModule } from '@angular/material' ;
import { MatPaginatorModule } from '@angular/material';
import { JobDetalisComponent } from './views/jobs/job-detalis/job-detalis.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrdersInProgressComponent } from './views/freelancer/jobs/orders-in-progress/orders-in-progress.component';
import { OrdersInBiddingComponent } from './views/freelancer/jobs/orders-in-bidding/orders-in-bidding.component';
import { AvailableJobsComponent } from './views/freelancer/jobs/available-jobs/available-jobs.component';
import { ThemeSettingComponent } from './views/theme-setting/theme-setting.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { OrdersCompletedComponent } from './views/freelancer/jobs/orders-completed/orders-completed.component';
import { OrdersCancelledComponent } from './views/freelancer/jobs/orders-cancelled/orders-cancelled.component';
import { FreelancerDashboardComponent } from './views/freelancer/freelancer-dashboard/freelancer-dashboard.component';
import { FreelancerMessagesComponent } from './views/freelancer/freelancer-messages/freelancer-messages.component';
import { FreelancerNotificationsComponent } from './views/freelancer/freelancer-notifications/freelancer-notifications.component';
import { FAQComponent } from './views/faq/faq.component';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterComponent } from './views/footer/footer.component';
import { ClientDashboardComponent } from './views/client/client-dashboard/client-dashboard.component';
import { ClientJobsInBiddingComponent } from './views/client/client-jobs-in-bidding/client-jobs-in-bidding.component';
import { ClientJobsInProcessComponent } from './views/client/client-jobs-in-process/client-jobs-in-process.component';
import { ClientJobsCompletedComponent } from './views/client/client-jobs-completed/client-jobs-completed.component';
import { ClientJobsCancelledComponent } from './views/client/client-jobs-cancelled/client-jobs-cancelled.component';
import { BidsComponent } from './views/client/bids/bids.component';
import { MessageDialogComponent } from './views/message-dialog/message-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UploadSubmissionComponent } from './views/upload-submission/upload-submission.component';
import { SubmissionsComponent } from './views/client/submissions/submissions.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { MessagesComponent } from './views/messages/messages.component';
import { OrderMessagesComponent } from './views/order-messages/order-messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FreelancerRatingDialogComponent } from './views/freelancer-rating-dialog/freelancer-rating-dialog.component';
import { NotificationsComponent } from './views/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GuestNavComponent,
    RegisterClientComponent,
    FreelancerComponent,
    ClientComponent,
    PostJobComponent,
    JobsComponent,
    OrderMessageComponent,
    OrderBiddingComponent,
    ClientNavComponent,
    FreelancerNavComponent,
    JobDetalisComponent,
    OrdersInProgressComponent,
    OrdersInBiddingComponent,
    AvailableJobsComponent,
    ThemeSettingComponent,
    OrdersCompletedComponent,
    OrdersCancelledComponent,
    FreelancerDashboardComponent,
    FreelancerMessagesComponent,
    FreelancerNotificationsComponent,
    FAQComponent,
    GettingStartedComponent,
    FooterComponent,
    ClientDashboardComponent,
    ClientJobsInBiddingComponent,
    ClientJobsInProcessComponent,
    ClientJobsCompletedComponent,
    ClientJobsCancelledComponent,
    BidsComponent,
    MessageDialogComponent,
    UploadSubmissionComponent,
    SubmissionsComponent,
    MessagesComponent,
    OrderMessagesComponent,
    FreelancerRatingDialogComponent,
    NotificationsComponent,

  ],
  imports: [
    FormsModule,
    MatTooltipModule,
    MatInputModule,
    FlexLayoutModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatChipsModule,
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatTreeModule,
    LayoutModule,
    MatSnackBarModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
